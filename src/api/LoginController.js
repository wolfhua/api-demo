import moment from 'dayjs'
import bcrypt from 'bcryptjs'
import send from '../config/MailConfig'
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from '../config'
import { checkCode, getJWTPayload } from '@/common/Utils'
import User from '@/model/User'
import SignRecord from '@/model/SignRecord'
import { getValue, setValue } from '@/config/RedisConfig'
import { v4 as uuidv4 } from 'uuid'

class LoginController {
//   constructor () {}
  async forget (ctx) {
    // post,如果是get请求，使用ctx.request.query获取get参数
    const { body } = ctx.request
    try {
      const sid = body.sid
      const code = body.code
      // 验证验证码的时效性、正确性
      const codeVerify = await checkCode(sid, code)
      if (codeVerify) {
        // TODO 查询用户信息
        const user = await User.findOne({ username: body.username })
        if (!user) {
          ctx.body = {
            code: 404,
            msg: '未查询到账号信息，您可以直接注册此账号！'
          }
          return
        }
        const key = uuidv4()
        // 将用户信息加密存到redis中，并将key值通过邮件转到链接上,有效时长30分钟
        setValue(key, jsonwebtoken.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '30m' }), 30 * 60)

        const result = await send({
          type: 'reset',
          data: {
            key: key,
            username: body.username
          },
          expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
          email: body.username,
          user: user.name ? user.name : body.username
        })
        ctx.body = {
          code: 200,
          data: result,
          msg: '邮件发送成功'
        }
      } else {
        ctx.body = {
          code: 401,
          msg: '图形验证码不正确！'
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  async login (ctx) {
    // 接收登录参数
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    // 验证验证码的时效性、正确性
    const result = await checkCode(sid, code)
    if (result) {
      // 验证账号密码是否正确
      const user = await User.findOne({ username: body.username })
      const userObj = user.toJSON()
      // 不返回字段
      const noshow = ['username', 'password']
      noshow.map((item) => {
        delete userObj[item]
      })
      // 此处将空用户错误放到errorHandle中统一处理了，前端监听错误信息判断500错误
      // if (user !== null) {
      // console.log(await bcrypt.compare(body.password, user.password))
      if (await bcrypt.compare(body.password, user.password)) {
        // 登录成功，返回token
        // console.log('hello login')
        const token = jsonwebtoken.sign({ _id: userObj._id, sex: 'F' }, JWT_SECRET, {
          expiresIn: '1d'
        })
        // 判断用户是否签到
        const signRecord = await SignRecord.findByUid(userObj._id)
        if (signRecord !== null) {
          if (moment().format('YYYY-MM-DD') === moment(signRecord.created).format('YYYY-MM-DD')) {
            userObj.isSign = true
          } else {
            userObj.isSign = false
          }
          // 上次签到时间
          userObj.lastSign = signRecord.created
        } else {
          userObj.isSign = false
        }
        ctx.body = {
          code: 200,
          data: userObj,
          token: token
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '用户密码错误！'
        }
      }
      // } else {
      //     ctx.body = {
      //         code: 404,
      //         msg: '非法用户登录!'
      //     }
      // }
    } else {
      ctx.body = {
        code: 401,
        msg: '图形验证码不正确！'
      }
    }
  }

  async register (ctx) {
    // 接收登录参数
    const { body } = ctx.request
    // 验证验证码的时效性和有效性
    const sid = body.sid
    const code = body.code
    const msg = {}
    // 验证验证码的时效性、正确性
    const codeVerify = await checkCode(sid, code)
    if (codeVerify) {
      let check = true
      // 检测判断邮箱是否被注册
      const userInfo = await User.findOne({ username: body.username })
      if (userInfo !== null) { // 已被注册
        msg.username = ['邮箱已经注册，如果您忘记了密码，请点击忘记密码修改。']
        check = false
      }
      if (check) {
        // 密码加密
        const password = await bcrypt.hash(body.password, 5)
        console.log(password)
        const user = new User({
          username: body.username,
          password: password,
          nickname: body.nickname,
          created: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        const result = await user.save()
        ctx.body = {
          code: 200,
          data: result,
          msg: '注册成功，去登录吧'
        }
        return
      }
    } else {
      msg.code = ['图形验证码不正确！']
    }
    ctx.body = {
      code: 500,
      msg: msg
    }
  }

  // 密码重置
  async reset (ctx) {
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    const msg = {}
    if (!body.key) {
      ctx.body = {
        code: 500,
        msg: '请求参数异常，请重新获取链接'
      }
      return
    }
    // 验证图片验证码的时效性、正确性
    const result = await checkCode(sid, code)
    if (!result) {
      msg.code = ['验证码已经失效，请重新获取！']
      ctx.body = {
        code: 500,
        msg: msg
      }
      return
    }
    const token = await getValue(body.key)
    if (token) {
      const obj = getJWTPayload('Bearer ' + token)
      // console.log(obj)
      body.password = await bcrypt.hash(body.password, 5)
      await User.updateOne(
        { _id: obj._id },
        {
          password: body.password
        }
      )
      ctx.body = {
        code: 200,
        msg: '更新用户密码成功！'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '链接已经失效'
      }
    }
  }
}

export default new LoginController()

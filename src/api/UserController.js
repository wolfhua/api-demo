import SignRecord from '@/model/SignRecord'
import { getJWTPayload } from '@/common/Utils'
import User from '@/model/User'
import UserCollect from '../model/UserCollect'
import moment from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import { setValue, getValue } from '@/config/RedisConfig'
import { JWT_SECRET } from '@/config'
import jwt from 'jsonwebtoken'
import send from '@/config/MailConfig'
import bcrypt from 'bcryptjs'

class UserController {
  // 用户签到接口
  async userSign (ctx) {
    // 获取用户的ID
    const obj = await getJWTPayload(ctx.header.authorization)
    // 查询用户上一次签到记录
    const record = await SignRecord.findByUid(obj._id)
    // 查询用户信息
    const user = await User.findByID(obj._id)
    let newRecord = {}
    let result = ''
    // 判断签到逻辑
    if (record !== null) {
      // 有历史签到数据
      // 如果当前时间的日期与用户上一次签到的日期相同，说明用户今日已经签到
      if (moment(record.created).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
        ctx.body = {
          code: 500,
          favs: user.favs,
          count: user.count,
          lastSign: record.created,
          msg: '您今日已经签到过啦'
        }
        return
      } else {
        // 判断签到时间，如果用户上一次的签到时间是当前时间少一天，说明是连续签到
        let count = user.count
        let fav = 0
        if (moment(record.created).format('YYYY-MM-DD') === moment().subtract(1, 'days').format('YYYY-MM-DD')) {
          count += 1
          if (count < 5) {
            fav = 5
          } else if (count >= 5 && count < 15) {
            fav = 10
          } else if (count >= 15 && count < 30) {
            fav = 15
          } else if (count >= 30 && count < 100) {
            fav = 20
          } else if (count >= 100 && count < 365) {
            fav = 30
          } else {
            fav = 50
          }
          await User.updateOne({
            _id: obj._id
          }, {
            $inc: {
              favs: fav,
              count: 1
            }
          })
          result = {
            favs: user.favs + fav,
            count: count
          }
        } else {
          // 用户签到中断，重新计算连续签到
          fav = 5
          await User.updateOne(
            { _id: obj._id },
            {
              $set: { count: 1 },
              $inc: { favs: fav }
            }
          )
          result = {
            favs: user.favs + fav,
            count: 1
          }
        }
        // 更新签到记录
        newRecord = new SignRecord({
          uid: obj._id,
          favs: fav
        })
        await newRecord.save()
      }
    } else {
      // 无历史签到数据（第一次签到）
      // 保存用户签到数据，签到累计数 + 积分数据
      await User.updateOne({
        _id: obj._id
      }, {
        $set: { count: 1 },
        $inc: { favs: 5 }
      })
      // 保存用户签到数据
      newRecord = new SignRecord({
        uid: obj._id,
        favs: 5
      })
      await newRecord.save()
      result = {
        favs: user.favs + 5,
        count: 1
      }
    }
    ctx.body = {
      code: 200,
      msg: '请求成功',
      ...result,
      lastSign: newRecord.created
    }
  }

  // 更新用户基本信息接口
  async updateUserInfo (ctx) {
    const { body } = ctx.request
    // 获取头部token数据并解密
    const obj = getJWTPayload(ctx.header.authorization)
    // 获取用户数据
    const user = await User.findOne({ _id: obj._id })
    let msg = ''
    if (body.username && body.username !== user.username) {
      // 说明用户更改了邮箱，发送reset验证邮件
      // 判断用户的新邮箱是否被占用
      const tmpUser = await User.findOne({ username: body.username })
      if (tmpUser && tmpUser.password) {
        ctx.body = {
          code: 501,
          msg: '邮箱已经被注册，请更换'
        }
        return
      }
      const key = uuidv4()
      setValue(key, jwt.sign({ _id: obj._id }, JWT_SECRET, {
        expiresIn: '30m'
      }))
      await send({
        type: 'email',
        data: {
          key: key,
          username: body.username
        },
        code: '',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: user.username,
        user: user.nickname
      })
      msg = '更新基本资料成功，账号修改需要邮件确认，请查收邮件！'
    }
    // 此接口不允许被需修改手机号，密码等敏感信息
    const arr = ['username', 'mobile', 'password']
    arr.map((item) => { delete body[item] })
    // console.log(body)
    const result = await User.updateOne({ _id: obj._id }, body)
    // console.log(result)
    if (result.modifiedCount === 1) {
      ctx.body = {
        code: 200,
        msg: msg === '' ? '更新成功' : msg
      }
    } else {
      ctx.body = {
        code: 400,
        msg: '更新失败'
      }
    }
  }

  // 更新用户名
  async updateUsername (ctx) {
    const body = ctx.query
    if (body.key) {
      const token = await getValue(body.key)
      const obj = getJWTPayload('Bearer ' + token)
      await User.updateOne(
        { _id: obj._id },
        {
          username: body.username
        }
      )
      ctx.body = {
        code: 200,
        msg: '更新用户名成功'
      }
    }
  }

  // 修改密码
  async changePassword (ctx) {
    const { body } = ctx.request
    const obj = await getJWTPayload(ctx.header.authorization)
    // 获取用户数据
    const user = await User.findOne({ _id: obj._id })
    if (await bcrypt.compare(body.oldpwd, user.password)) {
      const newpassword = await bcrypt.hash(body.newpwd, 5)
      const result = await User.updateOne(
        { _id: obj._id },
        { $set: { password: newpassword } }
      )
      if (result.modifiedCount === 1) {
        ctx.body = {
          code: 200,
          msg: '更新成功'
        }
      } else {
        ctx.body = {
          code: 404,
          msg: '更新失败，请稍后重试!'
        }
      }
    } else {
      ctx.body = {
        code: 404,
        msg: '原密码错误，请查证！'
      }
    }
  }

  // 设置收藏
  async setCollect (ctx) {
    const params = ctx.query
    const obj = await getJWTPayload(ctx.header.authorization)
    if (parseInt(params.isFav)) {
      // 说明用户已经收藏了帖子
      await UserCollect.deleteOne({ uid: obj._id, tid: params.tid })
      ctx.body = {
        code: 200,
        msg: '取消收藏成功'
      }
    } else {
      const newCollect = new UserCollect({
        uid: obj._id,
        tid: params.tid,
        title: params.title
      })
      const result = await newCollect.save()
      if (result.uid) {
        ctx.body = {
          code: 200,
          data: result,
          msg: '收藏成功'
        }
      }
    }
  }

  // 获取收藏列表
  async getCollectByUid (ctx) {
    const params = ctx.query
    const obj = await getJWTPayload(ctx.header.authorization)
    const result = await UserCollect.getListByUid(
      obj._id,
      params.page,
      params.limit ? parseInt(params.limit) : 10
    )
    const total = await UserCollect.countByUid(obj._id)
    if (result.length > 0) {
      ctx.body = {
        code: 200,
        data: result,
        total,
        msg: '查询列表成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '查询列表失败'
      }
    }
  }
}

export default new UserController()

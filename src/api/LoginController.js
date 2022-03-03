import moment from "moment"
import bcrypt from 'bcryptjs'
import send from "../config/MailConfig"
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from "../config"
import { checkCode } from '@/common/Utils'
import User from '@/model/User'

class LoginController {
    constructor () {}
    async forget (ctx) {
        // post,如果是get请求，使用ctx.request.query获取get参数
        const { body } = ctx.request
        try {
            let sid = body.sid
            let code = body.code
            // 验证验证码的时效性、正确性
            let codeVerify = await checkCode(sid, code)
            if (codeVerify) {
                // TODO 查询用户信息
                let result = await send({
                    code: Math.floor(Math.random() * (9999-1000)) + 1000,
                    expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                    email: body.username,
                    user: 'Simu'
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
        let sid = body.sid
        let code = body.code
        // 验证验证码的时效性、正确性
        let result = await checkCode(sid, code)
        if (result) {
            // 验证账号密码是否正确
            let user = await User.findOne({ username: body.username })
            // 此处将空用户错误放到errorHandle中统一处理了，前端监听错误信息判断500错误
            // if (user !== null) {
                // console.log(await bcrypt.compare(body.password, user.password))
                if (await bcrypt.compare(body.password, user.password)) {
                    // 登录成功，返回token
                    // console.log('hello login')
                    let token = jsonwebtoken.sign({_id: '1000215', sex: 'F'}, JWT_SECRET, {
                        expiresIn: '1d'
                    })
                    ctx.body = {
                        code: 200,
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
        let sid = body.sid
        let code = body.code
        let msg = {}
        // 验证验证码的时效性、正确性
        let codeVerify = await checkCode(sid, code)
        if (codeVerify) {
            let check = true
            // 检测判断邮箱是否被注册
            let userInfo = await User.findOne({ username: body.username })
            if (userInfo !== null) {    //已被注册
                msg.username = ['邮箱已经注册，如果您忘记了密码，请点击忘记密码修改。']
                check = false
            }
            if (check) {
                // 密码加密
                let password = await bcrypt.hash(body.password, 5)
                console.log(password)
                let user = new User({
                    username: body.username,
                    password: password,
                    nickname: body.nickname,
                    created: moment().format('YYYY-MM-DD HH:mm:ss')
                })
                let result = await user.save()
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
}

export default new LoginController()
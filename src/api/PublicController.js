// captcha 图形验证码
import svgCaptcha from 'svg-captcha'
import { setValue } from '@/config/RedisConfig'

class PublicController {
//   constructor () {}
  async demo (ctx) {
    ctx.body = {
      msg: 'body message !!!!'
    }
  }

  async getCaptcha (ctx) {
    const { sid } = ctx.request.query
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 120,
      height: 38
    })
    // console.log(newCaptcha);
    // 设置图片验证码超时时间未10分钟
    setValue(sid, newCaptcha.text, 10 * 60)
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()

import nodemailer from 'nodemailer'
import { baseUrl } from '@/config'
import qs from 'qs'

// async..await is not allowed in global scope, must use a wrapper
async function send (sendInfo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    /* host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '912076360@qq.com', // generated ethereal user
      pass: 'qq token password', // generated ethereal password
    }, */
    host: 'smtp.163.com',
    // port: 587,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '18011468389@163.com', // generated ethereal user
      pass: 'QASCTWISREWQCYBH' // generated ethereal password
    }
  })

  //   let sendInfo = {
  //       code: '526641',
  //       expire: '2021-09-27',
  //       email: '18011468389@163.com',
  //       user: 'Simu'
  //   }

  // const url = 'http://blog.simuchen.com'
  const route = sendInfo.type === 'email' ? '/confirm' : '/reset'
  const url = `${baseUrl}/#${route}?` + qs.stringify(sendInfo.data)

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"认证邮件" <18011468389@163.com>', // sender address
    to: sendInfo.email, // list of receivers
    subject: sendInfo.user !== '' && sendInfo.type !== 'email'
      ? `你好开发者，${sendInfo.user}！《思慕社区》${sendInfo.type === 'reset' ? '重置密码链接！' : '注册码！'}`
      : '《思慕社区》确认修改邮件链接', // Subject line
    text: `您的邀请码是${sendInfo.code},${sendInfo.expire}前有效哦`, // plain text body
    html: `
    <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
        <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">Simu社区——欢迎来到官方社区</div>
        <div style="padding: 25px">
        <div>您好，${sendInfo.user}童鞋，重置链接有效时间30分钟，请在${sendInfo.expire}之前${sendInfo.type === 'reset' ? '重置您的密码' : '修改您的邮箱为：' + sendInfo.data.username}：</div>
        <a href="${url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">${sendInfo.type === 'reset' ? '立即重置密码' : '确认设置邮箱'}</a>
        <div style="padding: 5px; background: #f2f2f2;">如果该邮件不是由你本人操作，请勿进行激活！否则你的邮箱将会被他人绑定。</div>
        </div>
        <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">系统邮件，请勿直接回复</div>
    </div>
    ` // html body
  })

  return `Message sent: %s', ${info.messageId}`
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
export default send

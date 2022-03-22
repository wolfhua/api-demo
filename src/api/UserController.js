import SignRecord from '@/model/SignRecord'
import { getJWTPayload } from '@/common/Utils'
import User from '@/model/User'
import moment from 'dayjs'

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
}

export default new UserController()

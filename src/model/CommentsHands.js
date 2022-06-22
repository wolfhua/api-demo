import mongoose from '@/config/DBHelpler'
import moment from 'dayjs'

const Schema = mongoose.Schema

const CommentsHandsSchema = new Schema({
  cid: { type: String, ref: 'comments' },
  huid: { type: String, ref: 'users' }, // 被点赞用户的id
  uid: { type: String, ref: 'users' } // 点赞用户的id
})

// 添加middleware (保存时自动获取当前时间)
CommentsHandsSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

CommentsHandsSchema.post('save', function (error, doc, next) {
  if (error.code === 11000) {
    // 主键重复
    next(new Error('Error:Mongoose has a duplicate key.'))
  } else {
    next(error)
  }
})

CommentsHandsSchema.statics = {
  findByTid: function (id) {
    return this.find({ tid: id })
  }
}

const CommentsHands = mongoose.model('comments_hands', CommentsHandsSchema)

export default CommentsHands

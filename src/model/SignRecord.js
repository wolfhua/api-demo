import mongoose from '@/config/DBHelpler'
import moment from 'dayjs'

const Schema = mongoose.Schema

const SignRecordSchema = new Schema({
  // 关联用户表
  uid: { type: String, ref: 'users' },
  created: { type: Date },
  favs: { type: Number }
})

// 钩子方法，保存前执行
SignRecordSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

// 添加静态查询方法
SignRecordSchema.statics = {
  findByUid: function (uid) {
    // sort -1 =>字段倒序
    return this.findOne({ uid: uid }).sort({ created: -1 })
  }

}

const SignRecord = mongoose.model('sign_record', SignRecordSchema)

export default SignRecord

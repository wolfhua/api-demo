import mongoose from '../config/DBHelpler'
import moment from 'dayjs'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, index: { unique: true }, sparse: true },
  password: String,
  nickname: String,
  created: Date,
  updated: { type: Date },
  favs: { type: Number, default: 100 },
  gender: { type: String, default: '' },
  roles: { type: Array, default: ['user'] },
  pic: { type: String, default: '/pay.png' },
  mobile: { type: String, match: /^1[3-9](\d{9})$/, default: '' },
  status: { type: String, default: '0' },
  regmark: { type: String, default: '' },
  location: { type: String, default: '' },
  isVip: { type: String, default: '0' },
  count: { type: Number, default: 0 }
})

// 保存前执行
UserSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})
// 更新前执行
UserSchema.pre('update', function (next) {
  this.updated = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})
// 保存时执行
UserSchema.post('save', function (error, doc, next) {
  // console.log(error)
  if (error.code === 11000) {
    // 主键重复
    next(new Error('Error:Mongoose has a duplicate key.'))
  } else {
    next(error)
  }
})

UserSchema.statics = {
  findByID: function (id) {
    return this.findOne({ _id: id }, {
      password: 0, // 字段值给0，不查询字段
      username: 0,
      mobile: 0
    })
  }
}

const UserModel = mongoose.model('users', UserSchema, 'users')

export default UserModel

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

const condition = (options) => {
  let query = {}
  if (typeof options.search !== 'undefined') {
    if (typeof options.search === 'string' && options.search.trim() !== '') {
      if (['nickname', 'username'].includes(options.item)) {
        // 模糊匹配
        query[options.item] = { $regex: new RegExp(options.search) }
        // =》 { name: { $regex: /admin/ } } => mysql like %admin%
      } else {
        // radio
        // 判断字段值是否是 isVip isVip字段值大于1的时候，代表具体的vip等级
        if (options.item === 'isVip') {
          if (options.search === '0') {
            query[options.item] = options.search
          } else {
            query[options.item] = { $gte: options.search }
          }
        } else {
          query[options.item] = options.search
        }
      }
    }
    if (options.item === 'roles') {
      query = { roles: { $in: options.search } }
    }
    if (options.item === 'created') {
      const start = options.search[0]
      const end = options.search[1]
      query = { created: { $gte: new Date(start), $lt: new Date(end) } }
    }
  }
  return query
}

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
  },
  /**
   * 获取用户列表数据
   * @param {Object} options 筛选条件
   * @param {String} sort 排序方式
   * @param {Number} page 分页页数
   * @param {Number} limit 每页条数
   * @returns
   */
  getList: function (options, sort, page, limit) {
    const query = condition(options)
    return this.find(query, {
      password: 0 // 字段值给0，不查询字段
    }).sort({ [sort]: -1 })
      .skip(page * limit).limit(limit)
  },
  getTotal: function (options) {
    const query = condition(options)
    return this.find(query).countDocuments()
  }
}

const UserModel = mongoose.model('users', UserSchema, 'users')

export default UserModel

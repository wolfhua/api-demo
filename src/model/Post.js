// Post模型 （发帖记录）
import mongoose from '@/config/DBHelpler'
import moment from 'dayjs'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  // ref: 关联users模型
  uid: { type: String, ref: 'users' },
  title: { type: String },
  content: String, // String is shorthand for {type: String}
  created: Date,
  catalog: { type: String },
  fav: { type: String },
  isEnd: { type: String },
  reads: { type: Number },
  answer: { type: Number },
  status: { type: String },
  isTop: { type: String },
  sort: { type: String },
  tags: { type: Array }
})

// 添加middleware (保存时自动获取当前时间)
PostSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

// 添加静态方法
PostSchema.statics = {
  /**
   * 获取文章列表数据
   * @param {Object} options 筛选条件
   * @param {String} sort 排序方式
   * @param {Number} page 分页页数
   * @param {Number} limit 每页条数
   * @returns
   */
  getList: function (options, sort, page, limit) {
    // populate 联合查询时排除不需要的字段, path 替换字段 select 查询字段
    return this.find(options).sort({ [sort]: -1 })
      .skip(page * limit).limit(limit)
      .populate({ path: 'uid', select: 'nickname isVip pic' })
  },
  // 本周热议
  // 查询7天内回复最多的帖子，按回复数倒序，只查询title,answer字段
  getTopWeek: function () {
    return this.find({
      created: {
        $gte: moment().subtract(7, 'days')
      }
    }, {
      title: 1,
      answer: 1
    }).sort({ answer: -1 }).limit(15)
  }
}

const PostModel = mongoose.model('post', PostSchema)

export default PostModel

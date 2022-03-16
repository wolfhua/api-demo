// Links 友情链接/温馨通道模型
import mongoose from '@/config/DBHelpler'
import moment from 'dayjs'
const Schema = mongoose.Schema

const LinkSchema = new Schema({
  title: { type: String, default: '' },
  link: { type: String, default: '' },
  type: { type: String, default: 'links' }, // link-友链 tips-温馨通道
  created: { type: Date },
  isTop: { type: String, default: '' },
  sort: { type: String, default: '' }
})

// 添加middleware (保存时自动获取当前时间)
LinkSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD')
  next()
})

const LinksModel = mongoose.model('links', LinkSchema)

export default LinksModel

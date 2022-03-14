import mongoose from 'mongoose'
import { DB_URL } from './index'

// 创建连接
// mongoose.connect(config.DB_URL, {
//     useNewUrlParser: true, useUnifiedTopology: true
// })
// 6.x版本不需要后面相关参数
mongoose.connect(DB_URL)

// 连接成功
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + DB_URL)
})

// 连接异常
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err)
})

// 断开连接
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

// 导出
export default mongoose

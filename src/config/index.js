import path from 'path'

const DB_URL = 'mongodb://test:123456@148.70.52.182:27017/testdb'
const REDIS_CONFIG = {
  host: '148.70.52.182',
  port: 15001,
  password: '123456'
}
// jwt随机秘钥
const JWT_SECRET = 'dC0^eQ8.kM8&sU3_nF7$fK4{aN2$sK3?xuomAqfe81ke!'

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://www.toimc.com' : 'http://localhost:8080'

const uploadPath = process.env.NODE_ENV === 'production' ? 'app/public' : path.join(path.resolve(__dirname), '../../public')

const publicPath = [/^\/public/, /^\/login/, /^\/comments/, /^\/user/]

// 判断开发环境
const isDevMode = process.env.NODE_ENV !== 'production'

export {
  DB_URL,
  REDIS_CONFIG,
  JWT_SECRET,
  baseUrl,
  uploadPath,
  publicPath,
  isDevMode
}

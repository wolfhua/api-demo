// const koa = require('koa')
import Koa from 'koa'
import JWT from 'koa-jwt'
// const path = require('path')
import path from 'path'
// koa-helmet安全头
// const helmet = require('koa-helmet')
import helmet from 'koa-helmet'
// koa-static静态资源服务器,需传递绝对路径
// const statics = require('koa-static')
import statics from 'koa-static'

// const router = require('./routers/routers')
import router from './routers/routers'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
// 跨域请求
import cors from '@koa/cors'
// koa-compose 整合中间件
import compose from 'koa-compose'
// koa-compress 压缩中间件
import compress from 'koa-compress'
import { JWT_SECRET } from './config'
import errorHandle from './common/ErrorHandle'
import WebSocketServer from './config/WebSocket'
import auth from '@/common/Auth'
// import logger from 'koa-logger'
import log4js from '@/config/Log4j'
import monitorLogger from '@/common/Logger'
const app = new Koa()
const ws = new WebSocketServer()
ws.init()
// 设置ws到全局变量，方便调用
global.ws = ws

const isDevMode = !((process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'))

// 定义公共路径，不需要jwt鉴权
const jwt = JWT({ secret: JWT_SECRET }).unless({ path: [/^\/public/, /\/login/] })
/**
 * 使用koa-compose 集合中间件
 */
const middleware = compose([
  monitorLogger,
  // 配置允许文件上传
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true, // 保持文件后缀
      maxFieldsSize: 2 * 1024 * 1024 // 最大2M
    },
    onError: err => {
      console.log('koa-body err', err)
    }
  }),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
  jwt,
  auth,
  errorHandle, // 特别注意中间件顺序，errorHandle中有使用用户信息，所以放在auth后
  isDevMode ? log4js.koaLogger(log4js.getLogger('http'), {
    level: 'auto'
  }) : log4js.koaLogger(log4js.getLogger('access'), {
    level: 'auto'
  })
])

if (!isDevMode) {
  app.use(compress())
}

// 本地环境运行3001端口,生产环境运行 12005端口
const port = !isDevMode ? 12005 : 3001

app.use(middleware)
app.use(router())

app.listen(port, () => {
  console.log(`The server is running at: ${port}`)
  const logger = log4js.getLogger('out')
  logger.info('app is runing at ' + 3000)
})

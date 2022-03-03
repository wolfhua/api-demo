// const koa = require('koa')
import koa from 'koa'
import JWT from 'koa-jwt'
// const path = require('path')
import path from 'path'
const app = new koa()
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

const isDevMode = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? false : true

// 定义公共路径，不需要jwt鉴权
const jwt = JWT({secret: JWT_SECRET}).unless({ path: [/^\/public/, /\/login/] })
/**
 * 使用koa-compose 集合中间件
 */
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonutil({pretty:false, param: 'pretty'}),
    helmet(),
    errorHandle,
    jwt
])

if(!isDevMode) {
    app.use(compress())
}

// 本地环境运行3001端口,生产环境运行 12005端口
let port = !isDevMode ? 12005 : 3001

app.use(middleware)
app.use(router())

app.listen(port, () => {
    console.log(`The server is running at: ${port}`)
})
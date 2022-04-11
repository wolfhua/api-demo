// koa-combine-routers 合并路由
import combineRouters from 'koa-combine-routers'

// import publicRouter from './modules/publicRouter'
// import loginRouter from './modules/loginRouter'
// import userRouter from './modules/userRouter'

// 加载目录中的Router中间件
const moduleFiles = require.context('./modules', true, /\.js$/)
// console.log(moduleFiles('routers/modules/demoRouter.js').default)
// reduce 方法去拼接 koa-combine-routers所需的数据结构 Object[]
const modules = moduleFiles.keys().reduce((items, path) => {
  const value = moduleFiles(path)
  items.push(value.default)
  return items
}, [])
/*
rudece，循环，等价于forEach
const modules = []
moduleFiles.keys().forEach((item) => {
  const value = moduleFiles(item)
  modules.push(value.default)
}) */
// console.log(modules)
// module.exports = combineRouters(
//     arouters,
//     brouters
// )
export default combineRouters(
  modules
  // publicRouter,
  // loginRouter,
  // userRouter
)

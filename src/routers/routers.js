// koa-combine-routers 合并路由
import combineRouters from 'koa-combine-routers'

import publicRouter from './publicRouter'
import loginRouter from './loginRouter'

// module.exports = combineRouters(
//     arouters,
//     brouters
// )
export default combineRouters(publicRouter, loginRouter)
import { publicPath } from '@/config/index'
import { getJWTPayload } from '@/common/Utils'
import adminController from '@/api/AdminController'
export default async (ctx, next) => {
  const headers = ctx.header.authorization
  if (typeof headers !== 'undefined') {
    const obj = await getJWTPayload(headers)
    if (obj._id) {
      ctx._id = obj._id
    }
  }
  // await next()
  // 判断资源路径权限
  if (publicPath.some((item) => item.test(ctx.url))) {
    await next()
    return
  }
  // 2. 根据用户的roles -> menus -> operations
  const operations = await adminController.getOperations(ctx)
  // 3. 判断用户的请求路径是否在operations里面，如果在放行，否则禁止访问
  if (operations.includes(ctx.url) || operations.includes('all')) {
    await next()
  } else {
    ctx.throw(401)
  }
}

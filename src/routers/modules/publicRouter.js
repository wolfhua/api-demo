import Router from 'koa-router'
import publicController from '@/api/PublicController'
import ContentController from '@/api/ContentController'
import userController from '@/api/UserController'

const router = new Router()

router.prefix('/public')
// 获取验证码
router.get('/getCaptcha', publicController.getCaptcha)
// 获取文章列表
router.get('/list', ContentController.getPostList)
// 获取友链
router.get('/links', ContentController.getLinks)
// 获取温馨通道
router.get('/tips', ContentController.getTips)
// 获取本周热议
router.get('/topWeek', ContentController.getTopWeek)
// 确认修改邮箱
router.get('/reset-email', userController.updateUsername)

// module.exports = router
export default router
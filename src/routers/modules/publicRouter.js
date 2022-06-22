import Router from 'koa-router'
import publicController from '@/api/PublicController'
import contentController from '@/api/ContentController'
import userController from '@/api/UserController'
import commentsController from '@/api/CommentsController'

const router = new Router()

router.prefix('/public')
// 获取验证码
router.get('/getCaptcha', publicController.getCaptcha)
// 获取文章列表
router.get('/list', contentController.getPostList)
// 获取友链
router.get('/links', contentController.getLinks)
// 获取温馨通道
router.get('/tips', contentController.getTips)
// 获取本周热议
router.get('/topWeek', contentController.getTopWeek)
// 确认修改邮箱
router.get('/reset-email', userController.updateUsername)
// 获取文章详情
router.get('/content/detail', contentController.getPostDetail)
// 获取评论列表
router.get('/comments', commentsController.getComments)

// module.exports = router
export default router

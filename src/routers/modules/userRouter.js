import Router from 'koa-router'
import userController from '@/api/UserController'
import contentController from '@/api/ContentController'

const router = new Router()

// 添加路由前缀
router.prefix('/user')

// 签到
router.get('/fav', userController.userSign)
// 修改基本信息
router.post('/basic', userController.updateUserInfo)
// 修改密码
router.post('/change-password', userController.changePassword)
// 取消 设置收藏
router.get('/setCollect', userController.setCollect)
// 获取收藏列表
router.get('/collect', userController.getCollectByUid)
// 获取用户发帖列表
router.get('/post', contentController.getPostByUid)
// 删除发贴记录
router.get('/deletePost', contentController.deletePostByUid)

export default router

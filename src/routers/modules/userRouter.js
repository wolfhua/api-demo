import Router from 'koa-router'
import userController from '@/api/UserController'
import contentController from '@/api/ContentController'
import errorController from '@/api/ErrorController'

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
// 获取用户未读消息
router.get('/getmsg', userController.getMsg)
// 设置消息为已读
router.get('/setmsg', userController.setMsg)
// 保存错误日志
router.post('/add-error', errorController.addError)

export default router

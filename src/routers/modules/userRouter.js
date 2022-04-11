import Router from 'koa-router'
import UserController from '@/api/UserController'

const router = new Router()

// 添加路由前缀
router.prefix('/user')

router.get('/fav', UserController.userSign)
router.post('/basic', UserController.updateUserInfo)

export default router

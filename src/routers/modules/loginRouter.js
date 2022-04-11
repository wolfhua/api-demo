import Router from 'koa-router'
import loginController from '@/api/LoginController'

const router = new Router()

router.prefix('/login')

// 忘记密码
router.post('/forget', loginController.forget)
// 用户登录
router.post('/login', loginController.login)
// 用户注册
router.post('/register', loginController.register)
// 密码重置
router.post('/reset', loginController.reset)

export default router

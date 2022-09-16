import Router from 'koa-router'
import contentController from '@/api/ContentController'
import userController from '@/api/UserController'
import adminController from '@/api/AdminController'

const router = new Router()

router.prefix('/admin')

// 标签页面
// 获取标签列表
router.get('/getTags', contentController.getTags)

// 添加标签
router.post('/addTag', contentController.addTag)

// 删除标签
router.get('/removeTag', contentController.removeTag)

// 编辑标签
router.post('/editTag', contentController.updateTag)

// 获取用户列表
router.get('/users', userController.getUsersList)

// 删除
router.post('/delete-user', userController.deleteUserById)

// 更新特定用户
router.post('/update-user', userController.updateUserById)

// 批量更新
router.post('/update-user-settings', userController.updateUserBatch)

// 校验用户名是否冲突
router.get('/checkname', userController.checkUsername)

// 添加用户
router.post('/add-user', userController.addUser)

// 添加菜单
router.post('/add-menu', adminController.addMenu)
// 删除菜单
router.post('/delete-menu', adminController.deleteMenu)
// 修改菜单
router.post('/update-menu', adminController.updateMenu)
// 查询菜单
router.get('/get-menu', adminController.getMenu)

export default router

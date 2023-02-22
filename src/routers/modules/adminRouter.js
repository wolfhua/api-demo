import Router from 'koa-router'
import contentController from '@/api/ContentController'
import userController from '@/api/UserController'
import adminController from '@/api/AdminController'
import errorController from '@/api/ErrorController'

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
// 添加角色
router.post('/add-role', adminController.addRole)
// 删除角色
router.post('/delete-role', adminController.deleteRole)
// 修改角色
router.post('/update-role', adminController.updateRole)
// 查询角色
router.get('/get-roles', adminController.getRoles)
// 查询角色名称列表
router.get('/get-roles-names', adminController.getRolesNames)
// 获取用户 -> 角色 -> 动态菜单信息
router.get('/get-routes', adminController.getRoutes)
// 获取后台首页统计数据
router.get('/getStats', adminController.getStats)

// 获取错误日志
router.get('/get-error', errorController.getErrorList)
// 删除错误日志
router.post('/delete-error', errorController.deleteError)

export default router

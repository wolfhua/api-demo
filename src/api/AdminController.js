import Menu from '@/model/Menus'
import Roles from '@/model/Roles'
import User from '@/model/User'
import { getMenuData, sortMenus } from '@/common/Utils'
class AdminController {
  async getMenu (ctx) {
    const result = await Menu.find({})
    ctx.body = {
      code: 200,
      data: sortMenus(result)
    }
  }

  async addMenu (ctx) {
    const { body } = ctx.request
    const menu = new Menu(body)
    const result = await menu.save()
    ctx.body = {
      code: 200,
      data: result
    }
  }

  async updateMenu (ctx) {
    const { body } = ctx.request
    const data = { ...body }
    delete data._id
    const result = await Menu.updateOne({ _id: body._id }, { ...data })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  async deleteMenu (ctx) {
    const { body } = ctx.request
    const result = await Menu.deleteOne({ _id: body._id })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 获取角色权限
  async getRoles (ctx) {
    const result = await Roles.find({})
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 获取角色名称列表
  async getRolesNames (ctx) {
    const result = await Roles.find({}, { menu: 0, desc: 0 })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 增加角色
  async addRole (ctx) {
    const { body } = ctx.request
    const role = new Roles(body)
    const result = await role.save()
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 修改角色
  async updateRole (ctx) {
    const { body } = ctx.request
    const data = { ...body }
    delete data._id
    const result = await Roles.updateOne({ _id: body._id }, { ...data })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 删除角色
  async deleteRole (ctx) {
    const { body } = ctx.request
    const result = await Roles.deleteOne({ _id: body._id })
    ctx.body = {
      code: 200,
      data: result
    }
  }

  // 获取用户的菜单权限，菜单数据
  async getRoutes (ctx) {
    // 1. obj -> _id -> roles
    // 用户id已经由Auth中间件获取添加到ctx上了
    const user = await User.findOne({ _id: ctx._id }, { roles: 1 })
    const { roles } = user
    // 判断是否有超级管理员权限
    let flag = false
    if (roles.includes('super_admin')) {
      flag = true
    }
    // 2. 通过角色 -> menus
    // 用户的角色可能有多个
    // 角色 menus -> 去重
    let menus = []
    for (let i = 0; i < roles.length; i++) {
      const rights = await Roles.findOne({ role: roles[i] }, { menu: 1 })
      menus = menus.concat(rights.menu)
    }
    // 去重
    // 两种写法一样 new Set()返回的是一个集合（对象）
    // menus = Array.from(new Set(menus))
    menus = [...new Set(menus)]
    // 3. menus -> 可以访问的菜单数据
    const treeData = await Menu.find({})
    // 递归查询 type = 'menu' && _id 包含在menus中
    // 结构进行改造
    const routes = getMenuData(treeData, menus, flag)
    ctx.body = {
      code: 200,
      data: routes
    }
  }
}

export default new AdminController()

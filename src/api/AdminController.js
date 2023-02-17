import Menu from '@/model/Menus'
import Roles from '@/model/Roles'
import User from '@/model/User'
import Post from '@/model/Post'
import Comments from '@/model/Comments'
import SignRecord from '@/model/SignRecord'
import { getMenuData, sortMenus, getRights } from '@/common/Utils'
import moment from 'dayjs'
// 加载星期插件
const weekday = require('dayjs/plugin/weekday')
moment.extend(weekday)
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

  // 获取资源权限
  async getOperations (ctx) {
    const user = await User.findOne({ _id: ctx._id }, { roles: 1 })
    const { roles } = user
    // 判断是否有超级管理员权限
    let flag = false
    if (roles.includes('super_admin')) {
      flag = true
    }
    let menus = []
    for (let i = 0; i < roles.length; i++) {
      const role = roles[i]
      const rights = await Roles.findOne({ role }, { menu: 1 })
      menus = menus.concat(rights.menu)
    }
    menus = Array.from(new Set(menus))
    // 3. menus -> 可以访问的菜单数据
    const treeData = await Menu.find({})
    const operations = getRights(treeData, menus, flag)
    return operations
  }

  // 获取统计数据
  async getStats (ctx) {
    let result = {}
    // 当天零点
    const nowZero = new Date().setHours(0, 0, 0, 0)
    // 1. 顶部的card
    const inforCardData = []
    // 今天的时间
    const time = moment().format('YYYY-MM-DD 00:00:00')
    // 今日新增用户
    const userNewCount = await User.find({ created: { $gte: time } }).countDocuments()
    // 发帖累积
    const postsCount = await Post.find({}).countDocuments()
    // 今日新增评论
    const commentsNewCount = await Comments.find({ created: { $gte: time } }).countDocuments()
    // 本周开始时间
    const starttime = moment(nowZero).weekday(1).format()
    // 本周结束时间
    const endtime = moment(nowZero).weekday(8).format()
    // 周采纳统计
    const weekEndCount = await Comments.find({ created: { $gte: starttime, $lte: endtime }, isBest: '1' }).countDocuments()
    // 周签到统计
    const signWeekCount = await SignRecord.find({ created: { $gte: starttime, $lte: endtime } }).countDocuments()
    // 周发帖数量
    const postWeekCount = await Post.find({ created: { $gte: starttime, $lte: endtime } }).countDocuments()
    inforCardData.push(userNewCount)
    inforCardData.push(postsCount)
    inforCardData.push(commentsNewCount)
    inforCardData.push(weekEndCount)
    inforCardData.push(signWeekCount)
    inforCardData.push(postWeekCount)
    // 2. 左侧的饼图数据
    // 通过对catalog进行分组求和
    const postsCatalogCount = await Post.aggregate([
      { $group: { _id: '$catalog', count: { $sum: 1 } } }
    ])
    const pieData = {}
    postsCatalogCount.forEach((item) => {
      pieData[item._id] = item.count
    })
    // 3. 本周的右侧统计数据
    // 3.1 计算6个月前的时间： 1号 00:00:00
    // 3.2 查询数据库中对应时间内的数据 $gte
    // 3.3 group组合 -> sum -> sort排序
    const startMonth = moment(nowZero).subtract(5, 'M').date(1).format()
    const endMonth = moment(nowZero).add(1, 'M').date(1).format()
    // aggregate 的 $match 用于过滤文档,接受一个指定查询条件的文档
    // project 这里是格式化字段，取名month
    let monthData = await Post.aggregate([
      { $match: { created: { $gte: new Date(startMonth), $lt: new Date(endMonth) } } },
      { $project: { month: { $dateToString: { format: '%Y-%m', date: '$created' } } } },
      { $group: { _id: '$month', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ])
    // 利用reduce偷懒，将数据变成key->value对象
    // console.log(monthData)
    monthData = monthData.reduce((obj, item) => {
      // console.log('🚀 ~ file: AdminController.js:214 ~ AdminController ~ monthData=monthData.reduce ~ item', item)
      // console.log(obj)
      return {
        ...obj,
        [item._id]: item.count
      }
    }, {})
    // 4. 底部的数据
    const startDay = moment().subtract(7, 'day').format()
    const _aggregate = async (model) => {
      let result = await model.aggregate([
        { $match: { created: { $gte: new Date(startDay) } } },
        { $project: { month: { $dateToString: { format: '%Y-%m-%d', date: '$created' } } } },
        { $group: { _id: '$month', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
      ])
      result = result.reduce((obj, item) => {
        return {
          ...obj,
          [item._id]: item.count
        }
      }, {})
      return result
    }
    const userWeekData = await _aggregate(User) // -> { 2019-10-01: 1}
    const signWeekData = await _aggregate(SignRecord)
    const postWeekData = await _aggregate(Post)
    const commentsWeekData = await _aggregate(Comments)
    // {user: [1,2,3,4,0,0,0]}
    const dataArr = []
    for (let i = 0; i <= 6; i++) {
      dataArr.push(moment().subtract(6 - i, 'day').format('YYYY-MM-DD'))
    }
    const addData = (obj) => {
      const arr = []
      dataArr.forEach((item) => {
        if (obj[item]) {
          arr.push(obj[item])
        } else {
          arr.push(0)
        }
      })
      return arr
    }
    const weekData = {
      user: addData(userWeekData),
      sign: addData(signWeekData),
      post: addData(postWeekData),
      comments: addData(commentsWeekData)
    }
    result = {
      inforCardData,
      pieData,
      monthData,
      weekData
    }
    ctx.body = {
      code: 200,
      data: result
    }
  }
}

export default new AdminController()

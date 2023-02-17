import { getValue } from '@/config/RedisConfig'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@/config/index'
import { stat, mkdir } from 'fs'
import path from 'path'

// 检查验证码
const checkCode = async (key, value) => {
  const serveCode = await getValue(key)
  if (serveCode != null) {
    if (serveCode.toLowerCase() === value.toLowerCase()) {
      return true
    }
  }
  return false
}

// 解密验证token
const getJWTPayload = token => {
  // token的格式是 Bearer+ " "+ token
  return jwt.verify(token.split(' ')[1], JWT_SECRET)
}

// 创建文件
const makeDir = (dir) => {
  return new Promise((resolve) => {
    mkdir(dir, err => err ? resolve(false) : resolve(true))
  })
}

// 判断文件路径
const getStats = (path) => {
  return new Promise((resolve) => {
    stat(path, (err, stats) => err ? resolve(false) : resolve(stats))
  })
}

// 判断目录是否存在, 循环遍历，递归判断上级目录是否存在，不存在则创建
const dirExists = async (dir) => {
  const isExists = await getStats(dir)
  // 如果路径存在且不是文件，返回true
  if (isExists && isExists.isDirectory()) {
    return true
  } else if (isExists) {
    return false
  }

  // 如果路径不存在，创建(查找父级下是否有该路径)
  const tempDir = path.parse(dir).dir
  const status = await dirExists(tempDir)
  if (status) {
    // 存在上级，创建下级
    const result = await makeDir(dir)
    return result
  } else {
    return false
  }
}

// 替换对象下标
const rename = (obj, key, newKey) => {
  if (Object.keys(obj).indexOf(key) !== -1) {
    obj[newKey] = obj[key]
    delete obj[key]
  }
  return obj
}

const sortObj = (arr, property) => {
  return arr.sort((m, n) => m[property] - n[property])
}

// 获取菜单数据 flag -> 是否超级管理员
const getMenuData = (tree, rights, flag) => {
  const arr = []
  for (let i = 0; i < tree.length; i++) {
    const item = tree[i]
    // _id 包含在menus中
    // 结构进行改造，删除opertaions
    // item._id 是一个Object 加上引号转化为字符串
    if (rights.includes(item._id + '') || flag) {
      if (item.type === 'menu') {
        arr.push({
          _id: item._id,
          path: item.path,
          meta: {
            title: item.title,
            hideInBread: item.hideInBread,
            hideInMenu: item.hideInMenu,
            notCache: item.notCache,
            icon: item.icon
          },
          component: item.component,
          children: getMenuData(item.children, rights, flag)
        })
      } else if (item.type === 'link') {
        arr.push({
          _id: item._id,
          path: item.path,
          meta: {
            title: item.title,
            icon: item.icon,
            href: item.link
          }
        })
      }
    }
  }

  return sortObj(arr, 'sort')
}

const sortMenus = (tree) => {
  tree = sortObj(tree, 'sort')
  if (tree.children && tree.children.length > 0) {
    tree.children = sortMenus(tree.children, 'sort')
  }
  if (tree.operations && tree.operations.length > 0) {
    tree.operations = sortMenus(tree.operations, 'sort')
  }
  return tree
}

const flatten = (arr) => {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

const getRights = (tree, menus, flag) => {
  const arr = []
  if (flag) {
    arr.push('all')
  } else {
    for (const item of tree) {
      if (item.operations && item.operations.length > 0) {
        for (const op of item.operations) {
          if (menus.includes(op._id + '')) {
            arr.push(op.path)
          }
        }
      } else if (item.children && item.children.length > 0) {
        arr.push(getRights(item.children, menus))
      }
    }
  }

  return flatten(arr)
}

export {
  checkCode,
  getJWTPayload,
  dirExists,
  rename,
  getMenuData,
  sortMenus,
  flatten,
  getRights
}

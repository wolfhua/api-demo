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

export {
  checkCode,
  getJWTPayload,
  dirExists,
  rename
}

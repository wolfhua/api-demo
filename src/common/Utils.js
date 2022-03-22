import { getValue } from '@/config/RedisConfig'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@/config/index'

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

export {
  checkCode,
  getJWTPayload
}

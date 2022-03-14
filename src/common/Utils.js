import { getValue } from '@/config/RedisConfig'

const checkCode = async (key, value) => {
  const serveCode = await getValue(key)
  if (serveCode != null) {
    if (serveCode.toLowerCase() === value.toLowerCase()) {
      return true
    }
  }
  return false
}

export {
  checkCode
}

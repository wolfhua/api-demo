import redis, { createClient } from 'redis'
import { promisifyAll } from 'bluebird'
import { REDIS_CONFIG } from './index'

const options = {
  host: REDIS_CONFIG.host,
  port: REDIS_CONFIG.port,
  password: REDIS_CONFIG.password,
  detect_buffers: true,
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with
      // a individual error
      return new Error('The server refused the connection')
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands
      // with a individual error
      return new Error('Retry time exhausted')
    }
    if (options.attempt > 10) {
      // End reconnecting with built in error
      return undefined
    }
    // reconnect after
    return Math.min(options.attempt * 100, 3000)
  }
}

// const client = createClient(options)
const client = promisifyAll(createClient(options))

client.on('error', (err) => {
  console.log('Redis Client Connection error:' + err)
})

const setValue = (key, value, time) => {
  if (typeof value === 'undefined' || value == null || value === '') {
    return
  }
  if (typeof value === 'string') {
    if (typeof time !== 'undefined') {
      // 设置time时间后过期，单位是秒
      client.set(key, value, 'EX', time)
    } else {
      client.set(key, value)
    }
  } else if (typeof value === 'object') {
    Object.keys(value).forEach((item) => {
      client.hset(key, item, value[item], redis.print)
    })
  }
}
// v8 Promisify method use util, must node > 8
// const {promisify} = require('util')
// const getAsync = promisify(client.get).bind(client)
// const getValue = (key) => {
//     return getAsync(key)
// }

// const getHValue = (key) => {
//     return promisify(client.hgetall).bind(client)(key)
// }

// bluebird async method
const getValue = (key) => {
  return client.getAsync(key)
}

const getHValue = (key) => {
  return client.hgetallAsync(key)
}

const delValue = (key) => {
  client.del(key, (err, res) => {
    if (res === 1) {
      console.log('delete successfully')
    } else {
      console.log('delete redis key error:' + err)
    }
  })
}

export {
  client,
  setValue,
  getValue,
  getHValue,
  delValue
}

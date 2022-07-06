import WebSocket from 'ws'
import { getJWTPayload } from '@/common/Utils'
import Comments from '@/model/Comments'

class WebSocketServer {
  constructor (config = {}) {
    const defaultConfig = {
      port: 3002,
      // 是否鉴权
      isAuth: true,
      // 心跳检测时长
      timeInterval: 10 * 1000
    }
    const finalConfig = { ...defaultConfig, ...config }
    this.wss = {}
    this.interval = finalConfig.timeInterval
    this.isAuth = finalConfig.isAuth
    this.port = finalConfig.port
    this.timer = null
    // 其他配置项
    this.options = config.options || {}
  }

  init () {
    this.wss = new WebSocket.Server({ port: this.port, ...this.options })
    // 心跳检测
    this.heartbeat()
    // 链接信息
    this.wss.on('connection', (ws) => {
      // 初始的心跳连接状态
      ws.isAlive = true
      // 监听消息
      ws.on('message', (msg) => this.onMessage(ws, msg))
      // 监听关闭
      ws.on('close', () => this.onClose(ws))
    })
  }

  onMessage (ws, msg) {
    // 用户鉴权
    // 心跳检测
    // 消息发送
    const msgObj = JSON.parse(msg)
    const events = {
      auth: async () => {
        try {
          const obj = await getJWTPayload(msgObj.message)
          if (obj) {
            ws.isAuth = true
            ws._id = obj._id
            // 鉴权通过时，可以直接发送给用户未读消息总数
            const unreadTotal = await Comments.getUnreadTotal(ws._id)
            ws.send(JSON.stringify({
              event: 'message',
              message: unreadTotal
            }))
          }
        } catch (error) {
          ws.send(JSON.stringify({
            event: 'noauth',
            message: 'please auth again'
          }))
        }
      },
      heartbeat: () => {
        if (msgObj.message === 'pong') {
          this.isAlive = true
        }
      },
      message: () => {
        // 鉴权拦截
        if (!ws.isAuth && this.isAuth) {
          return
        }
        // 消息广播
        this.wss.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN && client._id === ws._id) {
            client.send(msg)
          }
        })
      }
    }
    events[msgObj.event]()
  }

  // 点对点的消息发送
  send (uid, msg) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client._id === uid) {
        client.send(msg)
      }
    })
  }

  // 广播消息
  broadcast (msg) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg)
      }
    })
  }

  onClose (ws) {

  }

  // 心跳检测
  heartbeat () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.wss.clients.forEach((ws) => {
        if (!ws.isAlive && ws.roomid) {
          // 如果不在线，关闭连接
          delete ws.roomid
          return ws.terminate()
        }
        // 主动发送心跳检测
        // 当客户端非返回消息后，主动设置flag
        ws.isAlive = false
        ws.send(JSON.stringify({
          event: 'heartbeat',
          message: 'ping'
        }))
      })
    }, this.interval)
  }
}

export default WebSocketServer

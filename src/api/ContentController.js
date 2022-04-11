import Post from '@/model/Post'
import Links from '@/model/Links'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import moment from 'dayjs'
import { uploadPath } from '@/config/index'
// 创建目录method1
// import { dirExists } from '@/common/Utils'
// 创建目录method2
import mkdir from 'make-dir'

class ContentController {
  // 获取发帖列表
  async getPostList (ctx) {
    // get, 如果是post请求，使用{ body } = ctx.request获取参数
    const body = ctx.request.query
    // console.log(body)

    const sort = body.sort ? body.sort : 'created'
    const page = body.page ? parseInt(body.page) : 0
    const limit = body.limit ? parseInt(body.page) : 20
    const options = {}
    if (typeof body.catalog !== 'undefined' && body.catalog !== '') {
      options.catalog = body.catalog
    }
    if (typeof body.isTop !== 'undefined' && body.isTop !== '') {
      options.isTop = body.isTop
    }
    if (typeof body.status !== 'undefined' && body.status !== '') {
      options.status = body.status
    }
    if (typeof body.isEnd !== 'undefined' && body.isEnd !== '') {
      options.isEnd = body.isEnd
    }
    if (typeof body.tag !== 'undefined' && body.tag !== '') {
      options.tags = { $elemMatch: { name: body.tag } }
    }
    // console.log(options)

    const result = await Post.getList(options, sort, page, limit)
    ctx.body = {
      code: 200,
      data: result,
      msg: '文章数据获取成功'
    }
  }

  // 获取友链
  async getLinks (ctx) {
    const result = await Links.find({ type: 'links' })
    ctx.body = {
      code: 200,
      data: result,
      msg: '友链获取成功'
    }
  }

  // 获取温馨通道
  async getTips (ctx) {
    const result = await Links.find({ type: 'tips' })
    ctx.body = {
      code: 200,
      data: result,
      msg: '温馨通道数据获取成功'
    }
  }

  // 获取本周热议
  async getTopWeek (ctx) {
    const result = await Post.getTopWeek()
    ctx.body = {
      code: 200,
      data: result,
      msg: '温馨通道数据获取成功'
    }
  }

  // 图片上传
  async uploadImg (ctx) {
    const file = ctx.request.files.file
    // 图片名称、图片格式、存储的位置
    const ext = file.name.split('.').pop()
    const nowDate = moment().format('YYYYMMDD')
    const dir = `${uploadPath}/${nowDate}`
    console.log(ext)
    console.log(dir)
    // 判断路径是否存在，不存在则创建
    // method1
    // await dirExists(dir)
    // method2
    await mkdir(dir)
    // 存储文件到指定路径
    const picname = uuidv4()
    // 文件保存的位置
    const destPath = `${dir}/${picname}.${ext}`
    // 读取文件流
    const reader = fs.createReadStream(file.path)
    // 写入文件流
    const upStream = fs.createWriteStream(destPath)
    // 返回前端的路径
    const filePath = `/${nowDate}/${picname}.${ext}`
    // method1
    // reader.pipe(upStream)
    // method2
    let totalLength = 0
    reader.on('data', (chunk) => {
      totalLength += chunk.length
      console.log(totalLength)
      if (upStream.write(chunk) === false) {
        // 如果写入失败，暂停
        reader.pause()
      }
    })

    reader.on('drain', () => {
      reader.resume()
    })

    reader.on('end', () => {
      upStream.end()
    })
    ctx.body = {
      code: 200,
      msg: '文件上传成功',
      data: filePath
    }
  }
}

export default new ContentController()

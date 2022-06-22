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
import { checkCode, getJWTPayload, rename } from '@/common/Utils'
import User from '@/model/User'
import UserCollect from '@/model/UserCollect'

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

  // 发表帖子
  async addPost (ctx) {
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    // 验证图片验证码的正确性、时效性
    const result = await checkCode(sid, code)
    if (result) {
      const obj = await getJWTPayload(ctx.header.authorization)
      // 判断用户的积分数是否 > fav，否则，提示用户积分不足发贴
      // 用户积分足够的时候，新建Post，减除用户对应的积分
      const user = await User.findByID({ _id: obj._id })
      if (user.favs < body.fav) {
        ctx.body = {
          code: 501,
          msg: '积分不足'
        }
        return
      } else {
        await User.updateOne({ _id: obj._id }, { $inc: { favs: -body.fav } })
      }
      const newPost = new Post(body)
      newPost.uid = obj._id
      const result = await newPost.save()
      ctx.body = {
        code: 200,
        msg: '帖子发表成功',
        data: result
      }
    } else {
      // 图片验证码验证失败
      ctx.body = {
        code: 500,
        msg: '图片验证码验证失败'
      }
    }
  }

  // 编辑帖子
  async updatePost (ctx) {
    const { body } = ctx.request
    const sid = body.sid
    const code = body.code
    // 验证图片验证码的正确性、时效性
    const result = await checkCode(sid, code)
    if (result) {
      const obj = await getJWTPayload(ctx.header.authorization)
      // 判断帖子的作者是否为当前操作人

      const post = await Post.findOne({ _id: body.tid })
      if (post.uid === obj._id) {
        // 判断帖子是否结贴
        if (post.isEnd === '0') {
          const up = await Post.updateOne({ _id: body.tid }, body)
          if (up.modifiedCount === 1) {
            ctx.body = {
              code: 200,
              msg: '更新成功',
              data: up
            }
          } else {
            ctx.body = {
              code: 500,
              msg: '更新失败，请检查人品!'
            }
          }
        } else {
          ctx.body = {
            code: 402,
            msg: '已经结贴啦，乖乖！'
          }
        }
      } else {
        ctx.body = {
          code: 401,
          msg: '不是你的贴，别瞎搞！'
        }
      }
    } else {
      // 图片验证码验证失败
      ctx.body = {
        code: 500,
        msg: '图片验证码验证失败'
      }
    }
  }

  // 获取帖子详情
  async getPostDetail (ctx) {
    const params = ctx.query
    if (!params.tid) {
      ctx.body = {
        code: 500,
        msg: '文章ID参数缺失'
      }
      return
    }
    let result = await Post.findByTid(params.tid)
    let isFav = 0
    // 判断用户是否传递Authorization的数据，即是否登录
    if (
      typeof ctx.header.authorization !== 'undefined' &&
      ctx.header.authorization !== ''
    ) {
      const obj = await getJWTPayload(ctx.header.authorization)
      const userCollect = await UserCollect.findOne({
        uid: obj._id,
        tid: params.tid
      })
      if (userCollect && userCollect.tid) {
        isFav = 1
      }
    }
    const newPost = result.toJSON()
    newPost.isFav = isFav
    // 替换下标
    result = rename(newPost, 'uid', 'users')
    // 更新文章阅读记数
    const updatePost = await Post.updateOne(
      { _id: params.tid },
      { $inc: { reads: 1 } }
    )
    if (result._id && updatePost.modifiedCount === 1) {
      ctx.body = {
        code: 200,
        msg: '数据获取成功',
        data: newPost
      }
    } else {
      ctx.body = {
        code: 200,
        msg: '数据获取失败'
      }
    }
  }

  // 获取用户发帖列表
  async getPostByUid (ctx) {
    const params = ctx.query
    const obj = await getJWTPayload(ctx.header.authorization)
    const result = await Post.getListByUid(obj._id, params.page, params.limit ? parseInt(params.limit) : 10)
    const total = await Post.countByUid(obj._id)
    if (result.length > 0) {
      ctx.body = {
        code: 200,
        data: result,
        total,
        msg: '数据获取成功'
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '数据获取失败'
      }
    }
  }

  // 删除发贴记录
  async deletePostByUid (ctx) {
    const params = ctx.query
    const obj = await getJWTPayload(ctx.header.authorization)
    const post = await Post.findOne({ uid: obj._id, _id: params.tid })
    if (post.id === params.tid && post.isEnd === '0') {
      // await ContentController.prototype.deletePost(ctx)
      const result = await Post.deleteOne({ _id: params.tid })
      if (result.deletedCount === 1) {
        ctx.body = {
          code: 200,
          msg: '删除成功'
        }
      } else {
        ctx.body = {
          code: 500,
          msg: '执行删除失败！'
        }
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '删除失败，无权限！'
      }
    }
  }
}

export default new ContentController()

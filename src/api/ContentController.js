import Post from '@/model/Post'
import Links from '@/model/Links'

class ContentController {
  // 获取发帖列表
  async getPostList (ctx) {
    // get, 如果是post请求，使用{ body } = ctx.request获取参数
    const body = ctx.request.query
    console.log(body)

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
    console.log(options)

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

  // 获取温馨通道
  async getTopWeek (ctx) {
    const result = await Post.getTopWeek()
    ctx.body = {
      code: 200,
      data: result,
      msg: '温馨通道数据获取成功'
    }
  }
}

export default new ContentController()

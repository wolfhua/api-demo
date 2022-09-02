import Router from 'koa-router'
import contentController from '@/api/ContentController'

const router = new Router()

router.prefix('/content')

// 图片上传
router.post('/upload', contentController.uploadImg)
// 发表新帖
router.post('/add', contentController.addPost)
// 更新帖子
router.post('/update', contentController.updatePost)
// 更新帖子（后台）
router.post('/update-id', contentController.updatePostByTid)
// 删除帖子
router.get('/delete', contentController.deletePostByTid)

export default router

import Router from 'koa-router'
import commentsController from '@/api/CommentsController'

const router = new Router()

router.prefix('/comments')

// 添加评论
router.post('/reply', commentsController.addComment)
// 编辑评论
router.post('/update', commentsController.updateComment)
// 采纳评论
router.get('/accept', commentsController.setBest)
// 评论点赞
router.get('/hands', commentsController.setHands)

export default router

// Comments模型 (评论)
import mongoose from '@/config/DBHelpler'
import moment from 'dayjs'

const Schema = mongoose.Schema

const CommentsSchema = new Schema({
  tid: { type: String, ref: 'post' },
  uid: { type: String, ref: 'users' }, // 文章作者ID
  cuid: { type: String, ref: 'users' }, // 评论用户的ID
  content: { type: String },
  created: { type: Date },
  hands: { type: Number, default: 0 },
  status: { type: String, default: '1' },
  isRead: { type: String, default: '0' },
  isBest: { type: String, default: '0' }
})

// 添加middleware (保存时自动获取当前时间)
CommentsSchema.pre('save', function (next) {
  this.created = moment().format('YYYY-MM-DD HH:mm:ss')
  next()
})

CommentsSchema.post('save', function (error, doc, next) {
  if (error.code === 11000) {
    // 主键重复
    next(new Error('Error:Mongoose has a duplicate key.'))
  } else {
    next(error)
  }
})

CommentsSchema.statics = {
  findByTid: function (id) {
    return this.find({ tid: id })
  },
  findByCid: function (id) {
    return this.findOne({ _id: id })
  },
  getCommentsList: function (id, page, limit) {
    // match 过滤查询符合条件的数据 skip 分页 limit 限制每页条数
    return this.find({ tid: id }).populate({
      path: 'cuid',
      select: '_id nickname pic isVip',
      match: { status: { $eq: '0' } }
    }).populate({
      path: 'tid',
      select: '_id title status'
    }).skip(page * limit).limit(limit)
  },
  queryCount: function (id) {
    return this.find({ tid: id }).countDocuments()
  },
  // 获取用户未读消息总数
  getUnreadTotal (uid) {
    return this.find({ uid: uid, cuid: { $ne: uid }, isRead: '0', status: '1' }).countDocuments()
  },
  getCommetsPublic: function (id, page, limit) {
    return this.find({ cuid: id })
      .populate({
        path: 'tid',
        select: '_id title'
      })
      .skip(page * limit)
      .limit(limit)
      .sort({ created: -1 })
  },
  // 获取未读评论消息方法一：聚合查询
  /* getMsgList: function (id, page, limit) {
    return this.aggregate([
      {
        $lookup: {
          from: 'posts',
          let: { pid: { $toObjectId: '$tid' } },
          pipeline: [
            { $match: { $expr: { $eq: ['$_id', '$$pid'] } } },
            { $project: { _id: 1, uid: 1, content: 1 } }
          ],
          as: 'post'
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [{ $arrayElemAt: ['$post', 0] }, '$$ROOT']
          }
        }
      },
      {
        $addFields: { userId: { $toObjectId: '$uid' } }
      },
      {
        $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'tuid' }
      },
      {
        $unwind: '$tuid'
      },
      {
        $addFields: { fuserId: { $toObjectId: '$cuid' } }
      },
      {
        $lookup: { from: 'users', localField: 'fuserId', foreignField: '_id', as: 'fuid' }
      },
      {
        $unwind: '$fuid'
      },
      {
        $project: { post: 0, tuid: { username: 0, password: 0 }, fuid: { username: 0, password: 0 }, userId: 0, fuserId: 0, tid: 0, cuid: 0 }
      },
      { $match: { uid: id, status: '1', isRead: '0' } }
    ])
      .skip(page * limit)
      .limit(limit)
      .sort({ created: -1 })
  }, */
  // 获取未读评论消息方法二：在评论表中冗余一个发帖用户id信息
  // 自己给自己评论的排除
  getMsgList: function (id, page, limit) {
    return this.find({ uid: id, cuid: { $ne: id }, status: { $eq: '1' }, isRead: { $eq: '0' } })
      .populate({
        path: 'tid',
        select: '_id title'
      })
      .populate({
        path: 'uid',
        select: '_id nickname'
      })
      .populate({
        path: 'cuid',
        select: '_id nickname'
      })
      .skip(page * limit)
      .limit(limit)
      .sort({ created: -1 })
  }
}

const Comments = mongoose.model('comments', CommentsSchema)

export default Comments

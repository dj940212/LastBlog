import mongoose from 'mongoose'
import ArticleMod from '../models/article'
import ActivityMod from '../models/activity'
import uuid from 'uuid'
import formatTime from '../../utils/formatTime'

class Article {
    constructor() {}

    async add(ctx) {
        const key = uuid.v4()
        const title = ctx.request.body.title
        const content = ctx.request.body.content
        const description = ctx.request.body.description
        const babel  = ctx.request.body.babel.split(',')
        let article

        try {
            article = new ArticleMod({
                title: title,
                content: content,
                babel: babel,
                description: description
            })
            article = await article.save()

            const date = formatTime(new Date())
            let activity = await ActivityMod.findOne({date: date})

            if (activity) {
                const log = {
                    article_id: article._id,
                    article_title: article.title,
                    operationType: 'created'
                }

                activity.log.push(log)
                await activity.save()
            }else {
                let newActivity = new ActivityMod({
                    log: [{
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'created'
                    }]
                })
                await newActivity.save()
            }

        }catch(e) {
            ctx.body = {
                message: '保存失败',
            }
        }

        ctx.body = {
            message: '保存成功',
            data: article
        }
    }

    async list(ctx) {
        const count = ctx.request.query.count || 10
        const skipNum = ctx.request.query.skipNum || 0
        const sort = ctx.request.query.sort || -1

        const data = await ArticleMod.find({},['title', 'description', 'babel', 'meta', 'comment']).sort({'meta.updateAt': sort}).skip(parseInt(skipNum)).limit(parseInt(count))

        ctx.body = {
            message: 'success',
            data: data
        }
    }

    async update(ctx) {
        console.log(ctx.request)
        const body = ctx.request.body
        const content = ctx.request.body.content
        const description = ctx.request.body.description
        const title = ctx.request.body.title
        const _id  = ctx.request.body._id

        let article = await ArticleMod.findOne({_id:_id})
        if(title && content && description) {
          article.title = title
          article.content = content
          article.description = description
          await article.save()
        }
        // title && await ArticleMod.update({_id: _id},{$set: {title: title}})
        // content && await ArticleMod.update({_id: _id},{$set: {content: content}})
        // description && await ArticleMod.update({_id: _id},{$set: {description: description}})

        // 保存操作日志

        // let article
        try {
            // article = await ArticleMod.findOne({_id: _id})
            const date = formatTime(new Date())
            let activity = await ActivityMod.findOne({date: date})
            // console.log(activity)

            if (activity) {
                console.log("当天有日志")
                const log = {
                    article_id: article._id,
                    article_title: article.title,
                    operationType: 'updated'
                }
                activity.log.push(log)
                await activity.save()
            }else {
                console.log("当天没有日志")
                const newActivity = new ActivityMod({
                    log:[{
                        article_id: article._id,
                        article_title: article.title,
                        operationType: 'updated'
                    }]
                })
                await newActivity.save()
            }

        }catch(e) {
            ctx.body = {
                message: '更新失败',
            }
        }

        ctx.body = {
            message: '保存成功',
            data: article
        }
    }

    async delete(ctx) {
        const _id = ctx.request.body._id
        try {
            // 保存日志
            const article = await ArticleMod.findOne({_id: _id})
            const date = formatTime(new Date())
            let activity = await ActivityMod.findOne({date: date})

            if (activity) {
                const log = {
                    article_id: article._id,
                    article_title: article.title,
                    operationType: 'deleted'
                }
                activity.log.push(log)
                await activity.save()
            }else {
                const newActivity = new ActivityMod({
                    article_id: article._id,
                    article_title: article.title,
                    operationType: 'deleted'
                })
                await newActivity.save()
            }
            // 删除文章
            await ArticleMod.remove({_id: _id})
        }catch(e) {
            ctx.body = {
                message: 'failed'
            }
        }

        ctx.body = {
            message: 'success'
        }
    }

    async findOne(ctx) {
        const _id = ctx.request.query._id

        if (_id) {
            const data = await ArticleMod.findOne({_id:_id})

            ctx.body = {
                message: 'success',
                data: data
            }
        }
    }

}

export default new Article()

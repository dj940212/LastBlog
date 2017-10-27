import mongoose from 'mongoose'
import ArticleMod from '../models/article'
import ActivityMod from '../models/activity'
import uuid from 'uuid'
import formatTime from '../../utils/formatTime'
import LabelMapMod from '../models/labelMap'

class Article {
    constructor() {}

    async add(ctx) {
        const key = uuid.v4()
        const {title, content, description} = ctx.request.body
        // const label  = ctx.request.body.babel.split(',')
        let article

        try {
            article = new ArticleMod({
                title: title,
                content: content,
                // babel: babel,
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
            success: 'true',
            message: '保存成功',
            data: {
                _id: article._id, 
                title: article.title, 
                desc: article.description
            }
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
        
        const {content, description, title, _id, babel} = ctx.request.body

        let article = await ArticleMod.findOne({_id:_id})
        if(title && content && description) {
          article.title = title
          article.content = content
          article.description = description
          await article.save()
        }
        // 保存操作日志
        try {
            const date = formatTime(new Date())
            let activity = await ActivityMod.findOne({date: date})

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

    async addLabel(ctx) {
        const {label_id, article_id} = ctx.request.body
        const article = await ArticleMod.findOne({_id: article_id})
        const label = await LabelMapMod.findOne({_id: label_id})

        let labelMap = new LabelMapMod({
            article: article,
            label: label
        })
        labelMap.save()

        ctx.body = {
            success: true,
        }
    }

}

export default new Article()

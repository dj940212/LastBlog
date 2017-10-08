import mongoose from 'mongoose'
import ActivityMod from '../models/activity.js'

class Activity {
    constructor() {}

    async all(ctx) {
    	const count = ctx.request.body.count || 10
        const skipNum = ctx.request.body.skipNum || 0
        const sort = ctx.request.body.sort || -1

        const data = await ActivityMod.find({},'date logLen').sort({'date': sort})
        .skip(parseInt(skipNum)).limit(parseInt(count))

        ctx.body = {
            message: 'success',
            data: data
        }
    }
    // 一天的操作记录
    async oneDay(ctx) {
    	const date = ctx.request.query.date
    	const sort = ctx.request.query.sort || -1

    	const data = await ActivityMod.find({date: date}).sort({'date': sort})
    }
}

export default new Activity()
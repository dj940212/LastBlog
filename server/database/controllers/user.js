import mongoose from 'mongoose'
import UserMod from '../models/user'
import uuid from 'uuid'

class User {
    constructor() {}

    async login(ctx) {
        const {username, password} = ctx.request.body
        const user = await UserMod.findOne({ username: username })

        let match = false
        if (user) match = await user.comparePassword(password, user.password)
        if (match) {
            ctx.session.user = {
                username: user.username,
                _id: user._id
            }

            return (ctx.body = {
                success: true,
                data: {
                    username: user.username
                }
            })
        }

        return (ctx.body = {
            success: false,
            message: '密码错误'
        })

        
    }
}

export default new User()
import mongoose from 'mongoose'
import UserMod from '../models/user'
import uuid from 'uuid'

class User {
    constructor() {}

    async login(ctx) {
        const {username, password} = ctx.request.body
        let match = false

        const user = await UserMod.findOne({username: username, password: password})

        if (user) {
            ctx.cookies.set('userId', "2222222", {
                path: '/#/login',
                httpOnly: false,
                sameSite: 'strict',
                maxAge: 10 * 60 * 1000, // cookie有效时长
                expires: new Date('2017-11-15')
            });

            console.log(ctx.cookies.get('userId')) 

            ctx.body={
                message: 'success',
            }
        }else {
            ctx.body = {
                message: 'fail'
            }
        }
    }
}

export default new User()
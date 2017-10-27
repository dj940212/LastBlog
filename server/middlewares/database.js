import mongoose from 'mongoose'
import config from '../../config'
import User from '../database/models/user'


export default () => {
    mongoose.set('debug', true)

    mongoose.connect(config.db)

    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.db)
    })
    mongoose.connection.on('error', err => {
        console.log(err)
    })

    mongoose.connection.on('open', async ()=> {
        console.log('Connected to MongoDB Success')

        let user = await User.findOne({username: config.user.username})

        if (!user) {
            new User(config.user).save()
            console.log("写入管理员数据")
        }
    })
}
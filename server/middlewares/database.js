import mongoose from 'mongoose'
import config from '../../config'
import password from '../../config/password'
import User from '../database/models/user'


export default () => {
    mongoose.set('debug', true)

    mongoose.connect(password.db)

    mongoose.connection.on('disconnected', () => {
        mongoose.connect(password.db)
    })
    mongoose.connection.on('error', err => {
        console.log(err)
    })

    mongoose.connection.on('open', async ()=> {
        console.log('Connected to MongoDB Success')

        let user = await User.findOne({username: config.user.username})

        if (!user) {
            new User(password.user).save()
            console.log("写入管理员数据")
        }
    })
}
import mongoose from 'mongoose'

import BabelMod from '../models/babel'

class Babel {
    constructor() {

    }

    async add( ctx ) {
        const newBabel = ctx.request.body.babel
        let babel = await BabelMod.find({babel:newBabel})
        console.log(babel.length)
        if (!babel.length) {
            new BabelMod({babel:newBabel}).save()
            // const allBabel = await BabelMod().find({})
            ctx.body = {
                message: 'success',
                // data: allBabel
            }
        }else {
            ctx.body = {
                message: 'babel已存在',
            }
        }
    }

    async delete(ctx) {
        const _id = ctx.request.body._id

        try {
            await BabelMod.remove({_id:_id})
        }catch(e){
            ctx.body = {
                message: 'fail',
                data: e
            }
        }
        
        ctx.body = {
            message: 'success'
        }
    }

    async list(ctx) {
        let allBabel
        try{
            allBabel = await BabelMod.find({})
        }catch(e) {
            ctx.body = {
                message: 'fail',
                data: e
            }
        }

        ctx.body = {
            message: 'success',
            data: allBabel
        }
    }
}

export default new Babel()
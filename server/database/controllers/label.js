import mongoose from 'mongoose'

import LabelMod from '../models/label'

class Label {
    constructor() {

    }

    async new( ctx ) {
        const {name,color} = ctx.request.body
        let label = await LabelMod.findOne({name: name,color: color})

        if (!label) {
            const newLabel = await new LabelMod({name:name}).save()
            ctx.body = {
                success: true,
                message: "添加Label成功",
                data: newLabel
            }
        }else {
            ctx.body = {
                success: false,
                message: 'Label已存在',
            }
        }
    }

    async delete(ctx) {
        const _id = ctx.request.body._id

        try {
            await BabelMod.remove({_id:_id})
        }catch(e){
            ctx.body = {
                success: false,
                message: e,
            }
        }
        
        ctx.body = {
            success: true,
            message: '删除成功'
        }
    }

    async allLabels(ctx) {
        let labels
        try{
            labels = await LabelMod.find({})
        }catch(e) {
            ctx.body = {
                success: false,
                message: '获取失败',
                data: e
            }
        }
        ctx.body = {
            success: true,
            data: labels
        }
    }
}

export default new Label()
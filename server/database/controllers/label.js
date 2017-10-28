import mongoose from 'mongoose'

import LabelMod from '../models/label'

class Label {
    constructor() {

    }

    async new( ctx ) {
        const {name,color} = ctx.request.body
        let label = await LabelMod.findOne({name: name})

        if (!label) {
            const newLabel = await new LabelMod({name:name}).save()
            ctx.body = {
                success: true,
                message: "添加Label成功",
                data: newLabel
            }

            return
        }
        
        ctx.body = {
            success: false,
            message: 'Label已存在',
        }
        
    }

    async delete(ctx) {
        const _id = ctx.request.body._id

        try {
            await LabelMod.remove({_id:_id})
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

    async update(ctx) {
        const {name,color,_id} = ctx.request.body

        let label = await LabelMod.findOne({_id:_id})
        label.name = name
        label.color = color

        try {
            label = await label.save()
        }catch(e) {
            ctx.body = {
                success: false,
                data: e
            }
        }
        

        ctx.body = {
            success: true,
            message: '修盖label成功',
            data: label
        }

    }
}

export default new Label()
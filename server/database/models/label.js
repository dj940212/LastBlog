import mongoose from 'mongoose'
const Schema = mongoose.Schema

const LabelSchema = new Schema({
    name: String,
    color: {
		default: '#000',
		type: String
    },
    artCount: {
    	default: 0,
    	type: Number
    },
})

export default mongoose.model('Label', LabelSchema)

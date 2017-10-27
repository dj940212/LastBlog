import mongoose from 'mongoose'
const Schema = mongoose.Schema

const LabelSchema = new Schema({
    name: String,
    color: {
		default: '#000',
		type: String
    }
})

export default mongoose.model('Label', LabelSchema)

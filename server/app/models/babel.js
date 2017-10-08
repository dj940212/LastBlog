import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BabelSchema = new Schema({
    babel: String,
    num: {
    	default: 0,
    	type: Number
    },
    

})

export default mongoose.model('Babel', BabelSchema)

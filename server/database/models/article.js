import mongoose from 'mongoose'
import formatTime from '../../utils/formatTime'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    title: String,
    babel: [String],
    content: String,
    comment: String,
    description: String,
    meta: {
      createAt: String,
      updateAt: {
        type: Date,
        default: Date.now()
      }
    }
})

ArticleSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = new Date()
    console.log("创建时间",this.meta.createAt)
  }else {
    this.meta.updateAt = new Date()
  }

  next()
})

export default mongoose.model('Article', ArticleSchema)

import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
  userId: String,
  title: String,
  context: String
})

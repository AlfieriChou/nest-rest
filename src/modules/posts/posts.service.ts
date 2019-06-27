import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { CreatePostDto } from './dto/create-post.dto'
import { IPost } from './interfaces/posts.interface'

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly PostModel: Model<IPost>) {}

  async create(createPostDto: CreatePostDto): Promise<IPost> {
    const createdPost = new this.PostModel(createPostDto)
    return await createdPost.save()
  }

  async findAll(): Promise<IPost[]> {
    return await this.PostModel.find().exec()
  }
}

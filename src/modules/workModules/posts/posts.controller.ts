import { Body, Controller, Get, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags
} from '@nestjs/swagger'
import { IPost } from './interfaces/posts.interface'
import { PostDto } from './dto/post.dto'
import { PostsService } from './posts.service'
import { CreatePostDto } from './dto/create-post.dto'

@ApiBearerAuth()
@ApiUseTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiOperation({ title: 'Create Post' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: PostDto
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Show the record.',
    type: PostDto
  })
  async findAll(): Promise<IPost[]> {
    return this.postsService.findAll()
  }
}

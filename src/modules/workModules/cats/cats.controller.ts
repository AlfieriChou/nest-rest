import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags
} from '@nestjs/swagger'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { ICat } from './interfaces/cats.interface'
import { CatDto } from './dto/cat.dto'

@ApiBearerAuth()
@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ title: 'Create cat' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: CatDto
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto)
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Show the record.',
    type: CatDto
  })
  findOne(@Param('id') id: string): ICat {
    return this.catsService.findOne(+id)
  }
}

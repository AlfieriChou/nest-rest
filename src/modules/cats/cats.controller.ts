import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags
} from '@nestjs/swagger'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cats.interface'
import { ResponseCatDto } from './dto/response-cat.dto'

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
    type: ResponseCatDto
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Show the record.',
    type: ResponseCatDto
  })
  findOne(@Param('id') id: string): Cat {
    return this.catsService.findOne(+id)
  }
}

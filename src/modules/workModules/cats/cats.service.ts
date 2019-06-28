import { Injectable, Inject } from '@nestjs/common'
import { ICat } from './interfaces/cats.interface'
import { Cat } from './cats.entity'
import { CreateCatDto } from './dto/create-cat.dto'
import { CatDto } from './dto/cat.dto'

@Injectable()
export class CatsService {
  constructor(
    @Inject('CatsRepository')
    private readonly catsRepository: typeof Cat
  ) {}
  private readonly cats: ICat[] = []

  async create(params: CreateCatDto): Promise<CatDto> {
    const cat = new Cat()
    cat.name = params.name
    cat.age = params.age
    cat.breed = params.breed
    return await cat.save()
  }

  findOne(id: number): ICat {
    return this.cats[id]
  }
}

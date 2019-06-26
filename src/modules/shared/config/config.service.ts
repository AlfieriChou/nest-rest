import { Injectable } from '@nestjs/common'
import { SequelizeOrmConfig } from './interfaces/sequelize-orm-config.interface'
import { config } from '../../../config/config'

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig(): SequelizeOrmConfig {
    return config.database
  }
}

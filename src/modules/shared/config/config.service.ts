import { Injectable } from '@nestjs/common'
import { config } from '../../../config/config'
import { ISequelizeConfig } from 'sequelize-typescript'

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig(): ISequelizeConfig {
    return config.database
  }
}

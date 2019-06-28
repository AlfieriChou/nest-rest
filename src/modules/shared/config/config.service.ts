import { Injectable } from '@nestjs/common'
import { config } from '../../../config/config'
import { ISequelizeConfig } from 'sequelize-typescript'

interface JwtConfig {
  privateKey: string
}

@Injectable()
export class ConfigService {
  get sequelizeOrmConfig(): ISequelizeConfig {
    return config.database
  }
  get jwtConfig(): JwtConfig {
    return {
      privateKey: config.jwtPrivateKey
    }
  }
}

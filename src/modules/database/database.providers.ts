import { Sequelize } from 'sequelize-typescript'
import { ConfigService } from './../shared/config/config.service'
import { Cat } from '../cats/cats.entity'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig)
      sequelize.addModels([Cat])
      await sequelize.sync()
      return sequelize
    },
    inject: [ConfigService]
  }
]

import { Sequelize, ISequelizeConfig } from 'sequelize-typescript'
import { Cat } from '../cats/cats.entity'
import { ConfigService } from '../shared/config/config.service'

let configService: ConfigService = new ConfigService()

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig)
      sequelize.addModels([Cat])
      // await sequelize.sync({ force: true })
      return sequelize
    }
  }
]

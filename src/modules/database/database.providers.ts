import { Sequelize, ISequelizeConfig } from 'sequelize-typescript'
import { Cat } from '../workModules/cats/cats.entity'
import { ConfigService } from '../shared/config/config.service'
import { User } from '../workModules/users/user.entity'

let configService: ConfigService = new ConfigService()

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(configService.sequelizeOrmConfig)
      sequelize.addModels([Cat, User])
      // await sequelize.sync({ force: true })
      return sequelize
    }
  }
]

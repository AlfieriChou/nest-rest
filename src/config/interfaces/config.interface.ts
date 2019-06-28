import { ISequelizeConfig } from 'sequelize-typescript'

export interface Config {
  database: ISequelizeConfig
  jwtPrivateKey: string
}

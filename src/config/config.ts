import { Config } from './interfaces/config.interface'

export const config: Config = {
  database: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'alfieri',
    database: 'test'
  }
}

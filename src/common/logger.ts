import * as winston from 'winston'
import * as DailyRotateFile from 'winston-daily-rotate-file'
import * as fs from 'fs'
import * as path from 'path'

const env: string = process.env.NODE_ENV || 'development'
const logDir: string = path.resolve(__dirname, '../logs')
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export const logger: winston.Logger = winston.createLogger({
  level: env === 'development' ? 'verbose' : 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(
      info => `${info.timestamp} ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new winston.transports.File({
      filename: `${logDir}/error.log`,
      level: 'error'
    }),
    new DailyRotateFile({
      filename: `${logDir}/%DATE%-app.log`,
      datePattern: 'YYYY-MM-DD'
    })
  ]
})

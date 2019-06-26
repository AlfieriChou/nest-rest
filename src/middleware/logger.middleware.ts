import { logger } from '../common/logger'
import { Request, Response } from 'express'
import * as moment from 'moment'
import * as _ from 'lodash'

interface RequestLog {
  type: string
  req_method: string
  req_path: string
  req_time: string
  req_ip: string
  req_body: string | Object
  req_query: string | Object
  req_params: string | Object
  req_contentType: string
}

export function loggerMorgan(req: Request, res: Response, next) {
  const ts: string = moment().format('YYYY-MM-DD HH:mm:ss')
  const requestLog: RequestLog = {
    type: 'request',
    req_method: req.method,
    req_path: req.url,
    req_time: ts,
    req_ip: req.ip,
    req_body: _.clone(req.body) || '',
    req_query: _.clone(req.query) || '',
    req_params: _.clone(req.params) || '',
    req_contentType: req.get('Content-Type')
  }
  logger.info(JSON.stringify(requestLog))
  next()
}

import * as log4js from 'log4js'
import config from '../config'
import * as Koa from 'koa'

log4js.configure(config.logCon)
const logReq = log4js.getLogger('request')
const logRes = log4js.getLogger('response')

export const log = log4js.getLogger('console')

log.level = 'info'
logReq.level = 'info'
logRes.level = 'info'

const requestLog = (ctx: Koa.Context) => {
  let queryString = ''
  if (ctx.querystring) {
    queryString = `QueryString: ${ctx.querystring}`
  } else {
    queryString = ''
  }
  let ip = ctx.get('X-Real-IP')
  if (!ip) {
    ip = ctx.ip
  }
  log.info(ctx.get('X-Real-IP'))
  return `${ctx.method} ${ctx.path} IP:${ip} ${queryString}`
}

const responseLog = (ctx: Koa.Context) => {
  let body = ''
  if (ctx.body) {
    body = `
    Body:${JSON.stringify(ctx.body)}`
  }
  return `${ctx.status} ${body}`
}

export const logger = () => {
  return async (ctx: Koa.Context, next) => {
    logReq.info(requestLog(ctx))
    await next()
    logRes.info(responseLog(ctx))
  }
}

import * as log4js from 'log4js'
import config from '../config'
import * as Koa from 'koa'

log4js.configure(config.logCon)
const log = log4js.getLogger()
log.level = 'info'

const requestLog = (ctx: Koa.Context) => {
  let queryString = ''
  if (ctx.querystring) {
    queryString = `QueryString: ${ctx.querystring}`
  } else {
    queryString = ''
  }
  return `${ctx.method} ${ctx.path} IP:${ctx.ip} ${queryString}`
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
    log.info(requestLog(ctx))
    await next()
    log.info(responseLog(ctx))
  }
}
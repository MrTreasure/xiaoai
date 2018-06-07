import * as log4js from 'log4js'
import config from '../config'
import * as Koa from 'koa'

log4js.configure(config.logCon)
const logReq = log4js.getLogger('request')
const logRes = log4js.getLogger('response')
logReq.level = 'info'
logRes.level = 'info'

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
    logReq.info(requestLog(ctx))
    await next()
    logRes.info(responseLog(ctx))
  }
}
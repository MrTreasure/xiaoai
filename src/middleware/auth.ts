import { generateHMAC } from '../lib/HMAC'
import * as Koa from 'koa'

export const auth = () => {
  return async (ctx: Koa.Context, next) => {
    await next()
    if (ctx.method === 'GET' || ctx.method === 'POST') {
      ctx.set('Authorization', generateHMAC(ctx))
    }
  }
}
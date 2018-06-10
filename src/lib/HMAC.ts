import * as crypto from 'crypto'
import * as Koa from 'koa'
import secret from '../secret'

export const generateHMAC = (ctx: Koa.Context):string => {
  const hmac = crypto.createHmac('sha256', secret.secret)
  let param = ''
  if (ctx.params) {
    param = Object.keys(ctx.params).sort().map((key) => `${key}=${ctx.params[key]}`).join('&')
  }
  let date = ''
  if (ctx.get('X-Xiaomi-Date')) {
    date = ctx.get('X-Xiaomi-Date')
  } else {
    date = ctx.get('Date')
  }

  const before = `${ctx.method.toUpperCase()}
  ${ctx.path}
  ${param}
  ${date}
  ${ctx.get('Host')}
  ${ctx.get('Content-Type')}
  ${ctx.get('Content-MD5') ? ctx.get('Content-MD5') : ''

}`
  let final = hmac.update(before).digest().toString('hex')
  return `MIAI-HmacSHA256-V1:${secret.key_id}::${final}`
}
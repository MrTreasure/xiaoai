import * as Router from 'koa-router'
import * as Koa from 'koa'
import Request from '../interface/request'
import Response from '../interface/response'

const COIN = (bool: boolean) => {
  if (bool) {
    return '正面'
  } else {
    return '反面'
  }
}

const router = new Router()

router.get('/', async (ctx: Koa.Context) => {
  let req: Request = ctx.request.body
  ctx.body = {
    message: 'Hello Xiaoai'
  }
})

router.post('/', async (ctx: Koa.Context) => {
  let req: Request = ctx.request.body
  let res: Response = Object.create(null)
  const side = (Math.random() - 0.5) > 0
  const text = COIN(side)
  res.is_session_end = true
  res.version = '1.0'
  res.response = Object.create(null)
  res.response.to_speak = Object.create(null)
  res.response.to_speak.text = `扔了一枚${text}的硬币`
  res.response.to_speak.type = 0
  ctx.body = res
  
})

export default router
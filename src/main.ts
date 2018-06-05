import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParse from 'koa-body'
import * as responseTime from 'koa-response-time'
import * as helmet from 'koa-helmet'
import chalk from 'chalk'

const app = new Koa()
const router = new Router()
const log = console.log

router.get('/', async (ctx) => {
  ctx.body = {
    name: "Hello Xiaoai"
  }
})

// 初始一些
app.use(responseTime())
app.use(helmet())
app.use(bodyParse())
app.use(router.routes())

const server = app.listen(8080, () => {
  const address = server.address()
  log(chalk.green`service is running at ${address['address']}:${address['port']}`)
})
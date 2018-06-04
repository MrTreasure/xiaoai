import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParse from 'koa-body'
import * as responseTime from 'koa-response-time'
import * as helmet from 'koa-helmet'
import chalk from 'chalk'

const app = new Koa()
const router = new Router()
const log = console.log

// 初始一些
app.use(responseTime())
app.use(helmet())
app.use(bodyParse())
app.use(router.routes())

const server = app.listen(1314, () => {
  const address = server.address()
  log(chalk.green`service is running at ${address['address']}:${address['port']}`)
})
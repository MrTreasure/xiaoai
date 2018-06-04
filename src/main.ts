import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParse from 'koa-body'
import * as responseTime from 'koa-response-time'
import * as helmet from 'koa-helmet'

const app = new Koa()

// 初始一些
app.use(responseTime())
app.use(helmet())
app.use(bodyParse())
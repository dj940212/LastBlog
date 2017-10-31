import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import Router from './router/routes'
import mongoose from 'mongoose'
import logger from 'koa-logger'

import bodyParser from 'koa-bodyparser'
import passport from 'passport'
import cors from 'koa-cors'
import Database from './middlewares/database'
import VerifyToken from './middlewares/verifyToken'
import one from './middlewares/test'
import addSession from './middlewares/session'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8087
const router = Router()

// 数据库
Database()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
app.use(logger())
app.use(cors())
addSession(app)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

// Instantiate nuxt.js
const nuxt = new Nuxt(config)

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}

app.use(ctx => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset

  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, promise => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })
})


app.listen(port)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

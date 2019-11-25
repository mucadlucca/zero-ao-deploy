const koa = require ('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()

const index = ctx => {
  ctx.body = 'Node.js do zero ao deploy'
}

const hello = ctx => {
  const name = ctx.params.name || 'World'
  ctx.body = `Hello ${name}!`
}

router.get('/', index)
router.get('/hello', hello)
router.get('/hello/:name', hello)

app.use(router.routes())

const port = process.env.PORT

app.listen(port)
  .on('listening', () => console.log(`Listning on port ${port}`))


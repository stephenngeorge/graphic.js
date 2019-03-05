export default (ctx, func) => new Promise((res, rej) => {
  ctx.save()
  func()
  ctx.restore()
  res({
    status: 'RESOLVED',
    message: 'aside completed'
  })
})
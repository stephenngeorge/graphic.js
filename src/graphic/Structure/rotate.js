export default (ctx, { units = 'rad', angle = Math.PI / 2, code = () => console.log(`rotated by: ${angle}`) } = {}) => {
  let mode = units.toUpperCase()
  return new Promise((res, rej) => {
    if (mode === 'RAD' || mode === 'RADS' || mode === 'R' || mode === 'RADIANS') {
      ctx.save()
      ctx.rotate(angle)
      code()
      ctx.restore()
      res('reset transformations')
    }
    else if (mode === 'DEG' || mode === 'DEGS' || mode === 'D' || mode === 'DEGREES') {
      ctx.save()
      ctx.rotate(angle * (Math.PI / 180))
      code()
      ctx.restore()
      res('reset transformations')
    }
    else {
      rej({
        status: 'ERROR',
        message: 'units not recognised, please specify "deg" or "rad"'
      })
    }
  })
}
import rect from '../../Shapes/rect/rect'

// draw fill rectangle full size of canvas, colour default to light grey
export default function bgSolid(ctx, colour = '#e7e7e7', anchor = 'top-left') {
  let canvasWidth = ctx.canvas.clientWidth
  let canvasHeight = ctx.canvas.clientHeight
  let bg = null
  switch (anchor) {
    case 'top-left':
      bg = rect(ctx, 0, 0, canvasWidth, canvasHeight).draw(colour)
      break
    case 'centre':
      bg = rect(ctx, -canvasWidth * .5, -canvasHeight * .5, canvasWidth, canvasHeight).draw(colour)
      break
    default: console.log({
      status: 'ERROR',
      message: 'the anchor you have passed is not recognised, please select "top-left" or "centre"'
    })
  }
  return bg
}

import rect from '../../Shapes/rect/rect'
import vector from '../../Globals/vector/vector'

export default (ctx, start = vector(0, 0), end = vector(400, 0), colorStops = { 0: '#FFC0CB', 1: '#808080' }, anchor = 'top-left') => {
    let canvasWidth = ctx.canvas.clientWidth
    let canvasHeight = ctx.canvas.clientHeight
    let gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y)
    Object.entries(colorStops).forEach(color => {
        gradient.addColorStop(color[0], color[1])
    })
    let bg = null

    switch (anchor) {
        case 'top-left':
            bg = rect(ctx, 0, 0, canvasWidth, canvasHeight).draw(gradient)
            break
        case 'centre':
            bg = rect(ctx, -canvasWidth * .5, -canvasHeight * .5, canvasWidth, canvasHeight).draw(gradient)
            break
        default:
            bg = rect(ctx, 0, 0, canvasWidth, canvasHeight).draw(gradient)
    }

    return bg
}
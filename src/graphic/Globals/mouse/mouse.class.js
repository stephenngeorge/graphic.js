export default class Mouse {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y = 0
    }

    _pos(e) {
        let rect =  this.ctx.canvas.getBoundingClientRect()
        this.x = e.clientX - rect.left
        this.y = e.clientY - rect.top
        return this
    }
}
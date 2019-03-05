import Graphic from '../../Graphic'
import point from '../../Shapes/point/point'

export default class LineGraph extends Graphic {
  constructor(ctx, m, c, exp, sfX, sfY, mode) {
    super()
    this.ctx = ctx
    this.m = m
    this.c = c
    this.exp = exp
    this.path = []
    this.sfX = sfX
    this.sfY = sfY
    this.mode = mode
  }

  calc() {
    let width = this.ctx.canvas.width
    let minX = this.mode === 'cartesian' ? -width * .5 : 0
    let maxX = this.mode === 'cartesian' ? width * .5 : width
    for (let i = minX; i < maxX; i++) {
      let y = ((this.m * Math.pow(i, this.exp)) + this.c) * this.sfY
      this.path.push(point(this.ctx, i * this.sfX, y).draw())
    }
    return this
  }

  draw(colour = '#808080') {
    for (let i = 0; i < this.path.length - 1; i++) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.path[i].pos.x, this.path[i].pos.y)
      this.ctx.lineTo(this.path[i + 1].pos.x, this.path[i + 1].pos.y)
      this.ctx.strokStyle = colour
      this.ctx.stroke()
    }
    return this
  }
}

import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

export default class Sector extends Graphic {
  constructor(ctx, x, y, r, angle, size) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.r = r
    this.angle = angle
    this.size = size
  }
  /* ****
    DESIGN METHODS
  **** */
  draw(fillStyle = '#FFC0CB') {
    let xStart = Math.cos(this.angle) * this.r
    let yStart = Math.sin(this.angle) * this.r
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(xStart, yStart)
    this.ctx.arc(this.pos.x, this.pos.y, this.r, this.angle, this.angle + this.size)
    this.ctx.moveTo(0, 0)
    this.ctx.save()
    this.ctx.rotate(this.angle + this.size - Math.PI / 2)
    this.ctx.lineTo(this.pos.x, this.r)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    this.ctx.restore()
    return this
  }

  outline({weight = 3, colour = '#808080'} = {}) {
    let xStart = Math.cos(this.angle) * this.r
    let yStart = Math.sin(this.angle) * this.r
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(xStart, yStart)
    this.ctx.arc(this.pos.x, this.pos.y, this.r, this.angle, this.angle + this.size)
    this.ctx.moveTo(0, 0)
    this.ctx.save()
    this.ctx.rotate(this.angle + this.size - Math.PI / 2)
    this.ctx.lineTo(this.pos.x, this.r)
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.stroke()
    this.ctx.restore()
    return this
  }
}
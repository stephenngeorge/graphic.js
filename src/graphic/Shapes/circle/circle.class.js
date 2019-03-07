import Shape from '../Shape.class'
import Vector from '../../Globals/vector/vector.class'

export default class Circle extends Shape {
  constructor(ctx, x, y, r, forces) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.vel = new Vector(forces.vel.x, forces.vel.y)
    this.acc = new Vector(forces.acc.x, forces.acc.y)
    this.r = r
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw circle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    return this
  }
  // draw circle to canvas with stroke (no fill)
  outline({ weight = 2, colour = '#808080' } = {}) {
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2)
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.stroke()
    return this
  }
  /* ****
    DATA METHODS
  **** */
  // get area of circle
  _area() {
    return Math.PI * (this.r * this.r)
  }
  // get circumference of circle
  _circumf() {
    return Math.PI * this.r * 2
  }
}
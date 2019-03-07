import Shape from '../Shape.class'
import Vector from '../../Globals/vector/vector.class'

export default class Rect extends Shape {
  constructor(ctx, x, y, width, height, forces) {
    super()
    this.ctx = ctx
    this.width = width
    this.height = height
    this.pos = new Vector(x, y)
    this.vel = new Vector(forces.vel.x, forces.vel.y)
    this.acc = new Vector(forces.acc.x, forces.acc.y)
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw rectangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.fillStyle = fillStyle
    this.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    return this
  }
  // draw rectangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height)
    return this
  }
  /* ****
    DATA METHODS
  **** */
  // get area of rectangle
  _area() {
    return this.width * this.height
  }
  // get perimeter of rectangle
  _perim() {
    return 2 * (this.width + this.height)
  }
}
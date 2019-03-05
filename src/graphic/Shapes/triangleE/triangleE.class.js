import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

// EQUILATERAL TRIANGLE
export default class TraingleE extends Graphic {
  constructor(ctx, x, y, side) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.side = side
    this.height = Math.sqrt((this.side * this.side) - ((this.side * .5) * (this.side * .5)))
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw triangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(this.pos.x - (this.side * .5), this.pos.y + this.height)
    this.ctx.lineTo(this.pos.x + (this.side * .5), this.pos.y + this.height)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    return this
  }
  // draw triangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(this.pos.x - (this.side * .5), this.pos.y + this.height)
    this.ctx.lineTo(this.pos.x + (this.side * .5), this.pos.y + this.height)
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.closePath()
    this.ctx.stroke()
    return this
  }
  /* ****
    DATA METHODS
  **** */
  // get area of the triangle
  _area() {
    return (Math.sqrt(3) * (this.side * this.side)) * .25
  }
  // get the perimeter of the triangle
  _perim() {
    return this.side * 3
  }
}
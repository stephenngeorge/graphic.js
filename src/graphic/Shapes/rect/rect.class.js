import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

export default class Rect extends Graphic {
  constructor(ctx, x, y, width, height) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.width = width
    this.height = height
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
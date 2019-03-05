import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

// EQUILATERAL TRIANGLE
export default class TraingleI extends Graphic {
  constructor(ctx, x, y, base, side) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.base = base
    this.side = side
    this.height = Math.sqrt((this.side * this.side) - ((this.base * .5) * (this.base * .5)))
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw triangle to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(this.pos.x - (this.base * .5), this.pos.y + this.height)
    this.ctx.lineTo(this.pos.x + (this.base * .5), this.pos.y + this.height)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    return this
  }
  // draw triangle to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.beginPath()
    this.ctx.moveTo(this.pos.x, this.pos.y)
    this.ctx.lineTo(this.pos.x - (this.base * .5), this.pos.y + this.height)
    this.ctx.lineTo(this.pos.x + (this.base * .5), this.pos.y + this.height)
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
    return (((this.base * .5) * this.height) * .5) * 2
  }
  // get the perimeter of the triangle
  _perim() {
    return (this.side * 2) + this.base
  }
  // get the three angles of the triangle, returned as an array (2 angles should be congruent)
  _angles(mode = 'rad') {
    let units = mode.toUpperCase()
    let firstAngle = null, secondAngle = null, thirdAngle = null
    if (units === 'RAD' || units === 'RADS' || units === 'R' || units === 'RADIANS') {
      firstAngle = (Math.asin((this.base * .5) / this.side)) * 2
      secondAngle = Math.asin(this.height / this.side)
      thirdAngle = secondAngle
    }
    else if (units === 'DEG' || units === 'DEGS' || units === 'D' || units === 'DEGREES') {
      firstAngle = (Math.asin((this.base * .5) / this.side) * (180 / Math.PI)) * 2
      secondAngle = Math.asin(this.height / this.side) * (180 / Math.PI)
      thirdAngle = secondAngle
    }
    else {
      return {
        status: 'ERROR',
        message: 'the mode you have passed is not recognised, please specify "deg" or "rad"'
      }
    }
    return [firstAngle, secondAngle, thirdAngle];
  }
}
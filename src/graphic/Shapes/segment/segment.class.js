import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

export default class Segment extends Graphic {
  constructor(ctx, x, y, r, angle, chord) {
    super()
    this.ctx = ctx
    this.pos = new Vector(x, y)
    this.r = r
    this.angle = angle
    this.endAngle = 2 * Math.asin(this.chord / (this.r * 2))
    this.chord = chord
    this.dir = false
    if (this.chord > (this.r * 2)) {
      console.log({
        status: 'ERROR',
        message: 'mathematical problems - chord length (final argument), cannot exceed diameter (radius * 2). Consult docs for more information'
      })
    }
  }
  /* ****
    DESIGN METHODS
  **** */
  // set optional arc 'counterclockwise' parameter to opposite boolean, arc will be drawn in opposite direction;
  // MUST BE CALLED BEFORE OTHER DESIGN METHODS
  invert() {
    this.dir = !this.dir
    return this
  }
  // draw segemnt to canvas with fill colour (no stroke)
  draw(fillStyle = '#FFC0CB') {
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x + this.r, this.pos.y, this.r, this.angle, this.angle + this.endAngle, this.dir)
    this.ctx.fillStyle = fillStyle
    this.ctx.fill()
    return this
  }
  // draw segment to canvas with stroke (no fill)
  outline({weight = 2, colour = '#808080'} = {}) {
    // calculate end angle
    let endAngle = 2 * Math.asin(this.chord / (this.r * 2))
    this.ctx.beginPath()
    this.ctx.arc(this.pos.x + this.r, this.pos.y, this.r, this.angle, this.angle + endAngle, this.dir)
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.stroke()
    return this
  }
}
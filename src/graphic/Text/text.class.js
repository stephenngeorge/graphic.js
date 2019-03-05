import Graphic from '../Graphic'
import Vector from '../Globals/vector/vector.class'

export default class Text extends Graphic {

  constructor(ctx, string, xPos, yPos) {
    super()
    this.ctx = ctx
    this.string = string
    this.pos = new Vector(xPos, yPos)
  }
  /* ****
    DESIGN METHODS
  **** */
  // set alignment
  align(alignment = 'left') {
    this.ctx.textAlign = alignment
    return this
  }
  // set baseline
  baseline(baseline = 'bottom') {
    this.ctx.textBaseline = baseline
    return this
  }
  // set font size & family
  font({ size = '24px', family = 'Helvetica'} = {}) {
    this.ctx.font = `${size} ${family}`
    return this
  }
  // draw fill text with message from constructor
  draw(fillStyle = '#FFC0CB') {
    this.ctx.fillStyle = fillStyle
    this.ctx.fillText(this.string, this.pos.x, this.pos.y)
    return this
  }
  // draw stroke text with message from constructor
  outline({weight = 2, colour = '#808080'} = {}) {
    this.ctx.lineWidth = weight
    this.ctx.strokeStyle = colour
    this.ctx.strokeText(this.string, this.pos.x, this.pos.y)
    return this
  }
}
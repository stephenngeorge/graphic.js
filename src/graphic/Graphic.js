export default class Graphic {
  /* ****
    TRANSFORMATION METHODS
  **** */
  cartesian(quadrant = 0) {
    let canvasHeight = this.ctx.canvas.clientHeight
    let canvasWidth = this.ctx.canvas.clientWidth
    switch (quadrant) {
      case 0:
        this.ctx.translate(canvasWidth * .5, canvasHeight * .5)
        break
      case 1:
        this.ctx.translate(0, canvasHeight)
        break
      case 2:
        this.ctx.translate(canvasWidth, canvasHeight)
        break
      case 3:
        this.ctx.translate(canvasWidth, 0)
        break
      case 4:
        break
      default: console.log({
        status: 'ERROR',
        message: 'invalid quadrant passed, please specify 0, 1, 2, 3 or 4. See docs for more info'
      })
    }
    this.ctx.transform(1, 0, 0, -1, 0, 0)
    return this
  }

  centre() {
    let canvasHeight = this.ctx.canvas.clientHeight
    let canvasWidth = this.ctx.canvas.clientWidth
    this.ctx.translate(canvasWidth * .5, canvasHeight * .5)
    return this
  }

  rotate({ units = 'rad', angle = Math.PI / 2, code = () => console.log(`rotated by: ${angle}`) } = {}) {
    let mode = units.toUpperCase()
    if (mode === 'RAD' || mode === 'RADS' || mode === 'R' || mode=== 'RADIANS') {
      this.ctx.save()
      this.ctx.rotate(angle)
      code()
      this.ctx.restore()
      return this
    }
    else if (mode === 'DEG' || mode === 'DEGS' || mode === 'D' || mode === 'DEGREES') {
      this.ctx.save()
      this.ctx.rotate(angle * (Math.PI / 180))
      code()
      this.ctx.restore()
      return this
    }
    else {
      console.log({
        status: 'ERROR',
        message: 'units not recognised, please specify "deg" or "rad"'
      })
      return this
    }
  }
  /* ****
    ANIMATION METHODS
  **** */
  // restrict possible movement of shapes on x axis
  boundX(min, max) {
    if (this.pos.x >= max || this.pos.x <= min) this.vel.x *= -1
    return this
  }
  // restrict possible movement of shapes on y axis
  boundY(min, max) {
    if (this.pos.y >= max || this.pos.y <= min) this.vel.y *= -1
    return this
  }
  wrapX(min, max) {
    if (this.pos.x >= max) this.pos.x = min
    else if (this.pos.x <= min) this.pos.x = max
    return this
  }
  wrapY(min, max) {
    if (this.pos.y >= max) this.pos.y = min
    else if (this.pos.y <= min) this.pos.y = max
    return this
  }
}
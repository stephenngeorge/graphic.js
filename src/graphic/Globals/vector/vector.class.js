import Graphic from '../../Graphic'

export default class Vector extends Graphic {
  constructor(x, y) {
    super()
    this.x = x
    this.y = y
  }
  // copy the vector instead of mutating, preserves the original
  copy() {
    return new Vector(this.x, this.y)
  }
  // pass in a vector to be added to this
  add(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }
  // pass in a vector to be subtracted from this
  sub(vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }
  // pass in a value to multiply this by
  mult(multiplier) {
    this.x *= multiplier
    this.y *= multiplier
    return this
  }
  // pass in a divider to divide this by
  div(divider) {
    this.x /= divider
    this.y /= divider
    return this
  }
  // pass in a value for magnitude
  mag(value) {
    let hyp = (Math.sqrt((this.x * this.x) + (this.y * this.y))) * value
    let ang = Math.atan(this.y / this.x)
    this.x = Math.cos(ang) * hyp
    this.y = Math.sin(ang) * hyp
    return this
  }
  // limit vector values
  limit(limiter) {
    if (this.x > limiter) {
      this.y = (this.y / this.x) * limiter
      this.x = limiter
    }
    else if (this.y > limiter) {
      this.x = (this.x / this.y) * limiter
      this.y = limiter
    }
    return this
  }
  /* ****
    DATA METHODS
  **** */
  // return the heading as an angle, pass in desired units of the return value
  _heading(units = 'rad') {
    let mode = units.toUpperCase()
    let angle = Math.atan(this.y / this.x)
    if (mode === 'RAD' || mode === 'RADS' || mode === 'R' || mode === 'RADIANS' || mode === 'RADIAN') {
      return angle
    }
    if (mode === 'DEG' || mode === 'DEGS' || mode === 'D' || mode === 'DEGREES' || mode === 'DEGREE') {
      return angle * (180 / Math.PI)
    }
  }

  _mag(curr, dest) {
    let xDiff = Math.abs(curr.x - dest.x)
    let yDiff = Math.abs(curr.y - dest.y)

    return Math.sqrt((xDiff * xDiff) + (yDiff * yDiff))
  }
}
import Graphic from '../Graphic'

export default class Shape extends Graphic {

    constructor() {
        super()
        this.static = false
    }

    move() {
        this.vel = this.vel.add(this.acc)
        this.pos = this.pos.add(this.vel)
        this.acc.mult(0)
        return this
    }

    applyForce(force) {
        if (this.static === false) {
            this.acc = this.acc.add(force)
            return this
        }
        else {
            console.log('shape is static, cannot apply force')
            return this
        }
    }
}
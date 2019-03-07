import Graphic from '../Graphic'

export default class Shape extends Graphic {
    move() {
        this.vel = this.acc
        this.pos = this.pos.add(this.vel)
        return this
    }
}
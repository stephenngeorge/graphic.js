import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

export default class Curve extends Graphic {
   constructor(ctx, xFrom, yFrom, xCtrl, yCtrl, xTo, yTo) {
     super()
     this.ctx = ctx
     this.start = new Vector(xFrom, yFrom)
     this.ctrlPoint = new Vector(xCtrl, yCtrl)
     this.end = new Vector(xTo, yTo)
   }
   /* ****
     DESIGN METHODS
   **** */
   // draw bezier curved line (2 anchor points...see 'Curve' class for one anchor point)
   draw({weight = 2, colour = '#808080'} = {}) {
     this.ctx.beginPath()
     this.ctx.lineWidth = weight
     this.ctx.moveTo(this.start.x, this.start.y)
     this.ctx.quadraticCurveTo(this.ctrlPoint.x, this.ctrlPoint.y, this.end.x, this.end.y)
     this.ctx.strokeStyle = colour
     this.ctx.stroke()
     return this;
   }
}
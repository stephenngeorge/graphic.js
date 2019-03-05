import Graphic from '../../Graphic'
import Vector from '../../Globals/vector/vector.class'

export default class Bezier extends Graphic {
   constructor(ctx, xFrom, yFrom, xCtrl_1, yCtrl_1, xCtrl_2, yCtrl_2, xTo, yTo) {
     super()
     this.ctx = ctx
     this.start = new Vector(xFrom, yFrom)
     this.ctrlPoint1 = new Vector(xCtrl_1, yCtrl_1)
     this.ctrlPoint2 = new Vector(xCtrl_2, yCtrl_2)
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
     this.ctx.bezierCurveTo(this.ctrlPoint1.x, this.ctrlPoint1.y, this.ctrlPoint2.x, this.ctrlPoint2.y, this.end.x, this.end.y)
     this.ctx.strokeStyle = colour
     this.ctx.stroke()
     return this
   }
}
import Curve from './curve.class'

// create new Bezier, draw to the given context
export default (ctx, xFrom, yFrom, cp_x, cp_y, xTo, yTo) => new Curve(ctx, xFrom, yFrom, cp_x, cp_y, xTo, yTo)
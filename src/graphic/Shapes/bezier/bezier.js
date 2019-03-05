import Bezier from './bezier.class'

// create new Bezier, draw to the given context
export default (ctx, xFrom, yFrom, cp1_x, cp1_y, cp2_x, cp2_y, xTo, yTo) => new Bezier(ctx, xFrom, yFrom, cp1_x, cp1_y, cp2_x, cp2_y, xTo, yTo)
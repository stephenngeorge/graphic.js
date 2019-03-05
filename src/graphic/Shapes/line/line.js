import Line from './line.class'

// create new line, draw to the given context
export default (ctx, xFrom = 42, yFrom = 42, xTo = 126, yTo = 42) => new Line(ctx, xFrom, yFrom, xTo, yTo)
import TriangleI from './triangleI.class'

// create new right-angled triangle, draw to the given context
export default (ctx, xPos = 42, yPos = 42, base = 24, side = 42) => new TriangleI(ctx, xPos, yPos, base, side)
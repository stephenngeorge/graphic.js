import TriangleE from './triangleE.class'

// create new right-angled triangle, draw to the given context
export default (ctx, xPos = 42, yPos = 42, side = 42) => new TriangleE(ctx, xPos, yPos, side)

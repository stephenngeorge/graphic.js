import TriangleR from './triangleR.class'

// create new right-angled triangle, draw to the given context
export default (ctx, xPos = 42, yPos = 42, base = 40, height = 30) => new TriangleR(ctx, xPos, yPos, base, height)

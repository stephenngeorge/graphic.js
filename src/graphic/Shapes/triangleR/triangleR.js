import TriangleR from './triangleR.class'

// create new right-angled triangle, draw to the given context
export default (ctx, xPos = 42, yPos = 42, base = 40, height = 30, forces = { vel: {x: 0, y: 0}, acc: {x: 0, y: 0} }) => new TriangleR(ctx, xPos, yPos, base, height, forces)

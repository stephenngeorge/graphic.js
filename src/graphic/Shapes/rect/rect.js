import Rect from './rect.class'

export default (ctx, xPos = 42, yPos = 42, width = 42, height = 42, forces = { vel: {x: 0, y: 0}, acc: {x: 0, y: 0} }) => new Rect(ctx, xPos, yPos, width, height, forces)
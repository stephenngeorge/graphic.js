import Point from './point.class'

export default (ctx, x, y, forces = { vel: {x: 0, y: 0}, acc: {x: 0, y: 0} }) => new Point(ctx, x, y, forces)
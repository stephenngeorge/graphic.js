import Sector from './sector.class'

export default (ctx, x = 42, y = 42, r = 21, angle = Math.PI, size = Math.PI / 2, forces = { vel: {x: 0, y: 0}, acc: {x: 0, y: 0} }) => new Sector(ctx, x, y, r, angle, size, forces)
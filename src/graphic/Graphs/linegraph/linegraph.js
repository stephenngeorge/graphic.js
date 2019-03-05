import LineGraph from './linegraph.class'

export default (ctx, {m = 1, c = 0, exp = 1, sfX = 1, sfY = 1, mode = null } = {}) => new LineGraph(ctx, m, c, exp, sfX, sfY, mode)

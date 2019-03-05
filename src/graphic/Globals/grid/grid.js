import Grid from './grid.class'

export default (c, { cols = 20, rows = 20 } = {}) => new Grid(c, cols, rows)

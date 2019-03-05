import Graphic from '../../Graphic'

export default class Grid extends Graphic {
  constructor(ctx, cols, rows) {
    super()
    this.ctx = ctx
    this.cols = cols
    this.rows = rows
    this.grid = []
  }
  // get data for cell positions (returned as a nested array)
  calc() {
    let width = this.ctx.canvas.width, height = this.ctx.canvas.height
    for (let i = 0; i < (width / this.cols); i++) {
      let cell = { x: (width / (width / this.cols)) * i, rows: [], index: i }
      for (let j = 0; j < this.rows; j++) {
        cell.rows.push({ y: (height / (height / this.rows)) * j, index: j })
      }
      this.grid.push(cell)
    }
    return this
  }
  /* ****
    DESIGN METHODS
  **** */
  // draw lines to show grid layout
  draw({weight = 1, colour = 'rgba(127, 127, 127, .4)'} = {}) {
    this.grid.forEach(col => {
      this.ctx.beginPath()
      this.ctx.moveTo(col.x, 0)
      this.ctx.lineTo(col.x, this.ctx.canvas.height)
      this.ctx.strokeStyle = colour
      this.ctx.lineWidth = weight
      this.ctx.stroke()
      col.rows.forEach(row => {
        this.ctx.beginPath()
        this.ctx.moveTo(col.x, row.y)
        this.ctx.lineTo(col.x + this.cols, row.y)
        this.ctx.strokeStyle = colour
        this.ctx.lineWidth = weight
        this.ctx.stroke()
      })
    })
    return this
  }  
  /* ****
    DATA METHODS
  **** */
  _numCells() {
    return (this.ctx.canvas.width / this.cols) * (this.ctx.canvas.height / this.rows)
  }
  _cell({x = 0, y = 0, colour = '#FFC0CB'} = {}, mode = null) {
    let cellX = this.grid[x].x
    let cellY = this.grid[x].rows[y].y
    if (mode === 'highlight') {
      this.ctx.fillStyle = colour
      this.ctx.fillRect(cellX, cellY, this.cols, this.rows)
    }
    return { x: cellX, y: cellY }
  }
}
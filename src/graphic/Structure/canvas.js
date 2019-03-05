export default ({width = 600, height = 400, id = 'canvas', el = document.body} = {}) => {
  // create a canvas element, stored in variables 'canvas'
  let canvas = document.createElement('canvas')
  // set canvas attributes (defaults declared in function params)
  canvas.width = width
  canvas.height = height
  canvas.id = id
  // insert canvas element into DOM, attached to passed element (document body by default)
  el.appendChild(canvas)
  // return object with canvas data
  return {
    c: canvas.getContext('2d'),
    width: canvas.width,
    height: canvas.height,
    id: canvas.id
  }
}
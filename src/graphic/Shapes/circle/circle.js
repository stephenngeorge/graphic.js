import Circle from './circle.class'

// create new circle, draw to the given context
export default (context, xPos = 42, yPos = 42, radius = 21) => new Circle(context, xPos, yPos, radius)

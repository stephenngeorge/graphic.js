import Shape from './Shape.class'

export default (posx = 42, posy = 42, velx = 0, vely = 0, accx = 0, accy = 0) => new Shape(posx, posy, velx, vely, accx, accy)
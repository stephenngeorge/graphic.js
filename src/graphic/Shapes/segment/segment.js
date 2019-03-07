import Segment from './segment.class'

export default (ctx, xPos = 42, yPos = 42, radius = 21, startingAngle = Math.PI, chordLength = 42, forces = { vel: {x: 0, y: 0}, acc: {x: 0, y: 0} }) => new Segment(ctx, xPos, yPos, radius, startingAngle, chordLength, forces)
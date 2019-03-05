import Segment from './segment.class'

export default (ctx, xPos = 42, yPos = 42, radius = 21, startingAngle = Math.PI, chordLength = 42) => new Segment(ctx, xPos, yPos, radius, startingAngle, chordLength)
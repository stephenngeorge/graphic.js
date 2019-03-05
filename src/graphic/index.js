import backgrounds from './Backgrounds'
// ^^^ { bgsolid }
import globals from './Globals'
// ^^^ { grid, vector, Classes: { Grid, Vector } }
import Graphic from './Graphic'
import graphs from './Graphs'
// ^^^ { linegraph, Classes: { Linegraph } }
import helpers from './Helpers'
// ^^^ { convert, date, map }
import shapes from './Shapes'
// ^^^ { bezier, circle, curve, line, point, rect, sector, segment, triangleE, triangleI, triangleR, Classes: { Bezier, Circle, Curve, Line, Point, Rect, Sector, Segment, TriangleE, TriangleI, TriangleR } }
import structure from './Structure'
// ^^^ { animate, aside, canvas, rotate }
import text from './Text/text'

const g = {
  backgrounds,
  globals,
  Graphic,
  graphs,
  helpers,
  shapes,
  structure,
  text
}

export default g
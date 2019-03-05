import bezier from './bezier/bezier'
import Bezier from './bezier/bezier.class'

import circle from './circle/circle'
import Circle from './circle/circle.class'

import curve from './curve/curve'
import Curve from './curve/curve.class'

import line from './line/line'
import Line from './line/line.class'

import point from './point/point'
import Point from './point/point.class'

import rect from './rect/rect'
import Rect from './rect/rect.class'

import sector from './sector/sector'
import Sector from './sector/sector.class'

import segment from './segment/segment'
import Segment from './segment/segment.class'

import triangleE from './triangleE/triangleE'
import TriangleE from './triangleE/triangleE.class'

import triangleI from './triangleI/triangleI'
import TriangleI from './triangleI/triangleI.class'

import triangleR from './triangleR/triangleR'
import TriangleR from './triangleR/triangleR.class'

const shapes = {
    bezier,
    circle,
    curve,
    line,
    point,
    rect,
    sector,
    segment,
    triangleE,
    triangleI,
    triangleR,
    Classes: {
        Bezier,
        Circle,
        Curve,
        Line,
        Point,
        Rect,
        Sector,
        Segment,
        TriangleE,
        TriangleI,
        TriangleR
    }
}

export default shapes
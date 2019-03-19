import React from 'react'
import '../code.css'

export default () => (
    <div className='code'>
        <p><span className='keyword'>import</span> <span className='secondary'>g</span> <span className='keyword'>from</span> <span className='string'>'graphic'</span></p>
        <p><span className='keyword'>const</span> {'{'}
            <br /><span className='indent-1'>backgrounds,</span>
            <br /><span className='indent-1'>globals,</span>
            <br /><span className='indent-1'>helpers,</span>
            <br /><span className='indent-1'>shapes,</span>
            <br /><span className='indent-1'>structure</span>
            <br />{'}'} <span className='keyword'>=</span> g
        </p>
        <p><span className='keyword'>const</span> container <span className='keyword'>=</span> <span className='secondary'>document</span>.<span className='tertiary'>querySelector</span>('<span className='string'>.canvas-container__random-walker</span>')</p>
        <br />
        <p><span className='keyword'>if</span> (container <span className='keyword'>!==</span> <span className='secondary'>null</span>) {'{'}<br />
            <span className='comment indent-1'>{'// define canvas & get context, width & height variables'}</span><br />
            <span className='keyword indent-1'>const</span> {'{'} c, width, height {'}'} <span className='keyword'>=</span> <span className='secondary'>structure</span>.<span className='tertiary'>canvas</span>({'{'}<br />
                <span className='tertiary indent-2'>width</span>: <span className='secondary'>container</span>.offsetWidth,<br />
                <span className='tertiary indent-2'>height</span>: <span className='secondary'>container</span>.offsetHeight,<br />
                <span className='tertiary indent-2'>id</span>: '<span className='string'>random-walker</span>',<br />
                <span className='tertiary indent-2'>el</span>: container<br />
            <span className='indent-1'>{'}'})</span>
        </p>
        <p>
            <span className='comment indent-1'>{'// global config variable for circle radius & vector size'}</span><br />
            <span className='keyword indent-1'>const</span> unit <span className='keyword'>=</span> <span className='number'>8</span>
        </p>
        <p>
            <span className='comment indent-1'>{'// define walker'}</span><br />
            <span className='keyword indent-1'>const</span> walker <span className='keyword'>=</span> <span className='secondary'>shapes</span>.<span className='tertiary'>circle</span>(c, width / <span className='number'>2</span>, height / <span className='number'>2</span>, unit)<br />
            <span className='indent-1'>walker.history = []</span>
        </p>
        <p>
            <span className='secondary indent-1'>structure</span>.<span className='tertiary'>animate</span>(() => {'{'}<br />
                <span className='comment indent-2'>{'// redraw background'}</span><br />
                <span className='indent-2'>backgrounds.<span className='secondary'>bgsolid</span>(c)</span><br />
                <span className='comment indent-2'>{'// add current ball position to history array'}</span><br />
                <span className='indent-2'>walker.history.<span className='secondary'>push</span>(walker.pos.<span className='secondary'>copy</span>())</span><br />
                <span className='comment indent-2'>{'// limit history array to 100 items'}</span><br />
                <span className='keyword indent-2'>if</span> (walker.history.<span className='secondary'>length</span> <span className='keyword'>></span> <span className='number'>200</span>) walker.history.<span className='secondary'>shift</span>()<br />
                <span className='comment indent-2'>{'// draw circle at each position in history'}</span><br />
                <span className='indent-2'>walker.history.<span className='secondary'>forEach</span>(pos <span className='keyword'>=></span> {'{'}</span><br />
                    <span className='comment indent-3'>{'// set colour values based on pos co-ordinates'}</span><br />
                    <span className='keyword indent-3'>let</span> colourX = helpers.<span className='secondary'>_map</span>(pos.<span className='tertiary'>x</span>, <span className='number'>0</span>, width, <span className='number'>0</span>, <span className='number'>255</span>)<br />
                    <span className='keyword indent-3'>let</span> colourY = helpers.<span className='secondary'>_map</span>(pos.<span className='tertiary'>y</span>, <span className='number'>0</span>, height, <span className='number'>0</span>, <span className='number'>255</span>)<br />
                    <span className='comment indent-3'>{'// draw circle with values determined above'}</span><br />
                    <span className='indent-3'>shapes.<span className='secondary'>circle</span>(c, pos.<span className='tertiary'>x</span>, pos.<span className='tertiary'>y</span>, unit)<br /><span className='indent-3'>.</span><span className='secondary'>draw</span>(`<span className='string'>rgba(</span>${'{'}colourX{'}'}, <span className='number'>0</span>, ${'{'}colourY{'}'}, <span className='number'>.6</span><span className='string'>)</span>`)</span><br />
                <span className='indent-2'>})</span><br />
                <br />
                <span className='comment indent-2'>{'// randomly create vector to be added to ball position'}</span><br />
                <span className='keyword indent-2'>let</span> dir <span className='keyword'>=</span> <span className='keyword'>Math</span>.<span className='secondary'>random</span>()<br />
                <span className='keyword indent-2'>if</span> (dir {'<='} <span className='number'>.25</span>) walker.<span className='secondary'>acc</span> = globals.<span className='secondary'>vector</span>(<span className='number'>0</span>, unit * <span className='number'>2</span>)<br />
                <span className='keyword indent-2'>else if</span> (dir {'<='} <span className='number'>.5</span>) walker.<span className='secondary'>acc</span> = globals.<span className='secondary'>vector</span>(unit * <span className='number'>2</span>, <span className='number'>0</span>)<br />
                <span className='keyword indent-2'>else if</span> (dir {'<='} <span className='number'>.75</span>) walker.<span className='secondary'>acc</span> = globals.<span className='secondary'>vector</span>(<span className='number'>0</span>, -unit * <span className='number'>2</span>)<br />
                <span className='keyword indent-2'>else</span> walker.<span className='secondary'>acc</span> = globals.<span className='secondary'>vector</span>(-unit * <span className='number'>2</span>, <span className='number'>0</span>)<br />
                <br />
                <span className='comment indent-2'>{'// draw ball at new position'}</span><br />
                <span className='indent-2'>walker.<span className='secondary'>move</span>()</span><br />
                <span className='indent-2'>walker</span><br />
                    <span className='indent-3'>.<span className='secondary'>draw</span>('<span className='string'>#333</span>')</span><br />
                    <span className='indent-3'>.<span className='secondary'>outline</span>({'{'} weight: <span className='number'>2</span>, colour: '<span className='string'>#fff</span>' {'}'})</span><br />
                    <span className='indent-3'>.<span className='secondary'>wrapX</span>(<span className='number'>0</span> + walker.<span className='tertiary'>r</span>, width - walker.<span className='tertiary'>r</span>)</span><br />
                    <span className='indent-3'>.<span className='secondary'>wrapY</span>(<span className='number'>0</span> + walker.<span className='tertiary'>r</span>, height - walker.<span className='tertiary'>r</span>)</span><br />
            <span className='indent-1'>},</span> <span className='number'>10</span>) <span className='comment'>{'// <-- end of animate()'}</span>
        </p>
        <p>{'}'} <span className='comment'>{'// <-- end of if (container !== null)'}</span></p>
    </div>
)
import React from 'react'

import '../code.css'

export default () => (
    <div className='code'>
        <p><span className='keyword'>import</span> <span className='secondary'>g</span> <span className='keyword'>from</span> '<span className='string'>graphic</span>'</p>
        <p><span className='keyword'>const</span> container <span className='keyword'>=</span> <span className="secondary">document</span>.<span className="span tertiary">querySelector</span>('<span className="string">.canvas-container__mouse-attraction</span>')</p>
        <br />
        <p><span className='keyword'>if</span> (container <span className='keyword'>!==</span> null) {'{'}</p>
            <p className='indent-1'><span className='keyword'>let</span> {'{'}<br />
                <span className='indent-2'>backgrounds,</span><br />
                <span className='indent-2'>globals,</span><br />
                <span className='indent-2'>helpers,</span><br />
                <span className='indent-2'>shapes,</span><br />
                <span className='indent-2'>structure</span><br />
            {'}'} <span className='keyword'>=</span> g
            </p>
            <p className='comment indent-1'>{ '// define canvas & get context, width & height variables' }</p>
            <p className='indent-1'><span className='keyword'>const</span> {'{'} c, width, height } <span className='keyword'>=</span> <span className='secondary'>structure</span>.<span className='tertiary'>canvas</span>({'{'}<br />
                <span className='indent-2'><span className='tertiary'>width</span>: <span className='secondary'>canvas</span>.offsetWidth,</span><br />
                <span className='indent-2'><span className='tertiary'>height</span>: <span className='secondary'>canvas</span>.offsetHeight,</span><br />
                <span className='indent-2'><span className='tertiary'>id</span>: '<span className='string'>canvas</span>',</span><br />
                <span className='indent-2'><span className='tertiary'>el</span>: container</span><br />
            })</p>
            <p className='comment indent-1'>{ '// define array of circles with a random x, y & radius' }</p>
            <p className='indent-1'><span className='keyword'>let</span> balls = []</p>
            <p className='indent-1'><span className='keyword'>for</span> (<span className='keyword'>let</span> i = <span className='number'>0</span>; i <span className='keyword'>{'<'}</span> <span className='number'>30</span>; i<span className='keyword'>++</span>) {'{'}<br />
                <span className='comment indent-2'>{ '// min value = 40, max = width || height - 40 to ensure wrapping does not happen onload' }</span><br />
                <span className='indent-2'><span className='keyword'>let</span> randomX = <span className='keyword'>Math</span>.<span className='tertiary'>floor</span>(<span className='keyword'>Math</span>.<span className='tertiary'>random</span>() * ((width - <span className='number'>40</span>) - <span className='number'>40</span>) + 40</span>)<br />
                <span className='indent-2'><span className='keyword'>let</span> randomY = <span className='keyword'>Math</span>.<span className='tertiary'>floor</span>(<span className='keyword'>Math</span>.<span className='tertiary'></span>() * ((height - <span className='number'>40</span>) - <span className='number'>40</span>) + 40</span>)<br />
                <span className='indent-2'><span className='keyword'>let</span> randomR = <span className='keyword'>Math</span>.<span className='tertiary'>ceil</span>(<span className='keyword'>Math</span>.<span className='tertiary'>random</span>() * <span className='number'>30</span>)</span><br />
                <span className='indent-2'>balls.<span className='tertiary'>push</span>(shapes.<span className='tertiary'>circle</span>(c, randomX, randomY, randomR))</span><br />
            }</p>
            <p className='comment indent-1'>{ '// select canvas & listen for mousemove. Set a target with mouseX & mouseY & set ball acc towards it' }</p>
            <p className='indent-1'>document.<span className='secondary'>getElementById</span>('<span className='string'>canvas</span>').<span className='secondary'>addEventListener</span>('<span className='string'>mousemove</span>', e <span className='keyword'>=></span> {'{'}<br />
                <span className='indent-2'><span className='keyword'>let</span> mousePos = <span className='tertiary'>globals</span>.<span className='secondary'>mouse</span>(c).<span className='secondary'>_pos</span>(e)</span><br />
                <span className='indent-2'><span className='keyword'>let</span> target = <span className='tertiary'>globals</span>.<span className='secondary'>vector</span>(mousePos.<span className='tertiary'>x</span>, mousePos.<span className='tertiary'>y</span>)</span><br />
                <span className='comment indent-2'>{ '// point each ball at the mouse position vector & scale down relative to ball size' }</span><br />
                <span className='indent-2'>balls.<span className='secondary'>forEach</span>(ball <span className='keyword'>=></span> {'{'}</span><br />
                    <span className='indent-3'>ball.<span className='tertiary'>acc</span> = target.<span className='secondary'>copy</span>().<span className='secondary'>sub</span>(ball.<span className='tertiary'>pos</span>).<span className='secondary'>mult</span>(<span className='number'>1</span> / ball.<span className='tertiary'>r</span>)</span><br />
                <span className='indent-2'>})</span><br />
            })</p>
            <br />
            <p className='comment indent-1'>{ '// animate & draw every ball (color dependant on ball size)' }</p>
            <p className='indent-1'><span className='tertiary'>structure</span>.<span className='secondary'>animate</span>(() <span className='keyword'>=></span> {'{'}<br />
                <span className='indent-2'><span className='tertiary'>backgrounds</span>.<span className='secondary'>bgsolid</span>(c, '<span className='string'>#fff</span>')</span><br />
                <span className='indent-2'>balls.<span className='secondary'>forEach</span>(b <span className='keyword'>=></span> {'{'}</span><br />
                    <span className='indent-3'>b.<span className='secondary'>move</span>()</span><br />
                    <span className='indent-3'>.<span className='secondary'>draw</span>(`<span className='string'>rgba(<span className='number'>123</span>, <span className='number'>75</span>, ${'{'}helpers.<span className='secondary'>_map</span>(b.<span className='tertiary'>r</span>, <span className='number'>1</span>, <span className='number'>16</span>, <span className='number'>0</span>, <span className='number'>255</span>)}, <span className='number'>.5</span>)</span>`)</span><br />
                    <span className='indent-3'>.<span className='secondary'>outline</span>({'{'}<span className='teriary'>weight</span>: <span className='number'>2</span>, <span className='tertiary'>colour</span>: '<span className='string'>#000</span>'})</span><br />
                    <span className='indent-3'>.<span className='secondary'>wrapX</span>(<span className='number'>0</span>, width)</span><br />
                    <span className='indent-3'>.<span className='secondary'>wrapY</span>(<span className='number'>0</span>, height)</span><br />
                <span className='indent-2'>})</span><br />
            }, <span className='number'>24</span>)</p>
        <p>{'}'}</p>
    </div>
)
import React from 'react'

import '../code.css'

export default () => (
    <div className="code">
        <p><span className='keyword'>import</span> <span className='secondary'>g</span> <span className='keyword'>from</span> <span className='string'>'graphic'</span></p>
        <p><span className='keyword'>const</span> container <span className='keyword'>=</span> <span className='secondary'>document</span>.<span className='tertiary'>querySelector</span>(<span className='string'>'.canvas-container__forces'</span>)</p>

        <p><span className='keyword'>if</span> (container <span className='keyword'>!==</span> null) {'{'}</p>
            <p className='indent-1'><span className='keyword'>let</span> {'{'}<br />
                <span className='indent-1'>backgrounds,</span><br />
                <span className='indent-1'>globals,</span><br />
                <span className='indent-1'>helpers,</span><br />
                <span className='indent-1'>shapes,</span><br />
                <span className='indent-1'>structure</span><br />
            {'}'} <span className='keyword'>=</span> g</p>

            <p className='indent-1'><span className='keyword'>const</span> {'{'} c, width, height {'}'} <span className='keyword'>=</span> <span className='secondary'>structure</span>.<span className='tertiary'>canvas</span>({'{'}<br />
                <span className='indent-1'><span className='tertiary'>width</span>: <span className='secondary'>container</span>.offsetWidth,</span><br />
                <span className='indent-1'><span className='tertiary'>height</span>: <span className='secondary'>container</span>.offsetHeight,</span><br />
                <span className='indent-1'><span className='tertiary'>id</span>: <span className='string'>'canvas'</span>,</span><br />
                <span className='indent-1'><span className='tertiary'>el</span>: container</span><br />
            {'}'})</p>

            <p className='indent-1'><span className='secondary'>backgrounds</span>.<span className='tertiary'>bgsolid</span>(c)</p>

            <p className='indent-1 comment'>{'// define empty array'}</p>
            <p className='indent-1'><span className='keyword'>let</span> balls <span className='keyword'>=</span> []</p>
            <p className='indent-1 comment'>{'// set forces'}</p>
            <p className='indent-1'><span className='keyword'>let</span> gravity <span className='keyword'>=</span> <span className='secondary'>globals</span>.<span className='tertiary'>vector</span>(<span className='number'>0</span>, <span className='number'>.1</span>)</p>
            <p className='indent-1'><span className='keyword'>let</span> wind <span className='keyword'>=</span> <span className='secondary'>globals</span>.<span className='tertiary'>vector</span>(<span className='number'>.04</span>, <span className='number'>0</span>)</p>

            <p className='indent-1 comment'>{'// on click, draw ball at mouse position, set acceleration & add to balls array'}</p>
            <p className='indent-1'><span className='tertiary'>document</span>.<span className='secondary'>getElementById</span>(<span className='string'>'canvas'</span>).<span className='tertiary'>addEventListener</span>(<span className='string'>'click'</span>, <span className='keyword'>e</span> => {'{'}<br />
                <span className='indent-1'><span className='keyword'>let</span> mousePos <span className='keyword'>=</span> <span className='secondary'>globals</span>.<span className='tertiary'>mouse</span>(c).<span className='tertiary'>_pos</span>(e)</span><br />
                <span className='indent-1'><span className='keyword'>let</span> randomR = <span className='secondary'>helpers</span>.<span className='tertiary'>_random</span>(<span className='number'>8</span>, <span className='number'>12</span>)</span><br />
                <span className='indent-1'><span className='keyword'>let</span> ball <span className='keyword'>=</span> <span className='secondary'>shapes</span>.<span className='tertiary'>circle</span>(c, <span className='secondary'>mousePos</span>.<span className='tertiary'>x</span>, <span className='secondary'>mousePos</span>.<span className='tertiary'>y</span>, randomR)</span><br />
                <span className='indent-1'>balls.<span className='tertiary'>push</span>(ball)</span><br />
            {'}'})</p>

            <p className='indent-1'><span className='secondary'>structure</span>.<span className='tertiary'>animate</span>(() <span className='keyword'>=></span> {'{'}<br />
                <span className='indent-1'><span className='secondary'>backgrounds</span>.<span className='tertiary'>bgsolid</span>(c)</span><br />
                <br />
                <span className='indent-1'>balls.<span className='tertiary'>forEach</span>(ball <span className='keyword'>=></span> {'{'}</span><br />
                    <span className='indent-2 comment'>{'// draw ball'}</span><br />
                    <span className='indent-2'>ball.<span className='tertiary'>draw()</span>.<span className='tertiary'>outline</span>()</span><br />
                    <span className='indent-2 comment'>{'// is ball is not \'static\', animate it'}</span><br />
                    <span className='indent-2'><span className='keyword'>if</span> (ball.<span className='secondary'>static</span> <span className='keyword'>===</span> <span className='tertiary'>false</span>) {'{'}</span><br />
                        <span className='indent-3 comment'>{'// gravity is altered according to ball radius to simulate different mass'}</span><br />
                        <span className='indent-3'>ball.<span className='tertiary'>applyForce</span>(<span className='secondary'>globals</span>.<span className='tertiary'>vector</span>(gravity.<span className='tertiary'>x</span>, (ball.<span className='tertiary'>r</span> / <span className='number'>5</span>) * gravity.<span className='tertiary'>y</span>))</span><br />
                        <span className='indent-3'>ball.<span className='tertiary'>applyForce</span>(<span className='secondary'>globals</span>.<span className='tertiary'>vector</span>((ball.<span className='tertiary'>r</span> / <span className='number'>5</span>) * wind.<span className='tertiary'>x</span>, wind.<span className='tertiary'>y</span>))</span><br />
                        <span className='indent-3 comment'>{'// set new position vector based on force -> acc -> vel -> pos'}</span><br />
                        <span className='indent-3'>ball.<span className='tertiary'>move</span>()</span><br />
                        <span className='indent-3 comment'>{'// prevent ball from going beyond the bounds of the canvas'}</span><br />
                        <span className='indent-3 comment'>{'// inverse acceleration is 4/5 of original vector.y'}</span><br />
                        <span className='indent-3'>ball.<span className='tertiary'>bounceY</span>(<span className='number'>0</span> + ball.<span className='tertiary'>r</span>, height - ball.<span className='tertiary'>r</span>, <span className='number'>.8</span>)</span><br />
                        <span className='indent-3'>ball.<span className='tertiary'>bounceX</span>(<span className='number'>0</span> + ball.<span className='tertiary'>r</span>, width - ball.<span className='tertiary'>r</span>, <span className='number'>.8</span>)</span><br />
                    <span className='indent-2'>}</span><br />
                <span className='indent-1'>})</span><br />
            })</p>
        }
    </div>
)
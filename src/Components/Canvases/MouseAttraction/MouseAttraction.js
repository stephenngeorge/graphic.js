import React, { useEffect, useState } from 'react'
import g from '../../../graphic'

import './MouseAttraction.css'

export default ({ fullscreen }) => {
    // set state to track dimensions of the window/viewport
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    // set state every time window is resized
    useEffect(() => {
        const setWindowDimensions = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize', setWindowDimensions)
        // cleanup --> remove resize litener
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [windowWidth, windowHeight]) // <-- run function every time window dimensions change

    useEffect(() => {
        const container = document.querySelector('.canvas-container__mouse-attraction')

        if (container !== null) {
            let {
                backgrounds,
                globals,
                helpers,
                shapes,
                structure
            } = g
            // define canvas & get context, width & height variables
            const { c, width, height } = structure.canvas({
                width: container.offsetWidth,
                height: container.offsetHeight,
                id: 'canvas',
                el: container
            })
            // define array of circles with a random x, y & radius
            let balls = []
            for (let i = 0; i < 30; i++) {
                // min value = 40, max = width || height - 40 to ensure wrapping does not happen onload
                let randomX = Math.floor(Math.random() * ((width - 40) - 40) + 40)
                let randomY = Math.floor(Math.random() * ((height - 40) - 40) + 40)
                let randomR = Math.ceil(Math.random() * 30)
                balls.push(shapes.circle(c, randomX, randomY, randomR))
            }
            // select canvas & listen for mousemove. Set a target with mouseX & mouseY & set ball acc towards it
            document.getElementById('canvas').addEventListener('mousemove', e => {
                let mousePos = globals.mouse(c)._pos(e)
                let target = globals.vector(mousePos.x, mousePos.y)
                // point each ball at the mouse position vector & scale down relative to ball size
                balls.forEach(ball => {
                    ball.acc = target.copy().sub(ball.pos).mult(1 / ball.r)
                })
            })

            // animate & draw every ball (color dependant on ball size)
            structure.animate(() => {
                backgrounds.bgsolid(c, '#fff')
                balls.forEach(b => {
                    b.move()
                    .draw(`rgba(123, 75, ${helpers._map(b.r, 1, 16, 0, 255)}, .5)`)
                    .outline({weight: 2, colour: '#000'})
                    .wrapX(0, width)
                    .wrapY(0, height)
                })
            }, 24)
        }

        return () => {
            container.removeChild(document.getElementById('canvas'))
        }
    }, [windowWidth, windowHeight]) // <-- run when window dimensions change
    // ensures canvas will always be full screen & will be redrawn to fit new viewport size

    let isFullscreen = !!fullscreen ? 'fullscreen' : 'not-fullscreen'
    return (
        <div className={`canvas-container__mouse-attraction ${isFullscreen}`}></div>
    )

}
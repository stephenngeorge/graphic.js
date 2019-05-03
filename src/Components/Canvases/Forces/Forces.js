import React, { useEffect, useState } from 'react'
import g from '../../../graphic'

import './Forces.css'

export default ({ fullscreen }) => {
    let [windowWidth, setWindowWidth] = useState(window.innerWidth)
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const setWindowDimensions = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize', setWindowDimensions)

        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [windowWidth, windowHeight])

    useEffect(() => {
        const container = document.querySelector('.canvas-container__forces')

        if (container !== null) {
            let {
                backgrounds,
                globals,
                helpers,
                shapes,
                structure
            } = g

            const { c, width, height } = structure.canvas({
                width: container.offsetWidth,
                height: container.offsetHeight,
                id: 'canvas',
                el: container
            })

            backgrounds.bgsolid(c)

            // define empty array
            let balls = []
            // set forces
            let gravity = globals.vector(0, .1)
            let wind = globals.vector(.04, 0)

            // on click, draw ball at mouse position, set acceleration & add to balls array
            document.getElementById('canvas').addEventListener('click', e => {
                let mousePos = globals.mouse(c)._pos(e)
                let randomR = helpers._random(8, 12)
                let ball = shapes.circle(c, mousePos.x, mousePos.y, randomR)
                balls.push(ball)
            })

            structure.animate(() => {
                backgrounds.bgsolid(c)

                balls.forEach(ball => {
                    // draw ball
                    ball.draw().outline()
                    // is ball is not 'static', animate it
                    if (ball.static === false) {
                        // gravity is altered according to ball radius to simulate different mass
                        ball.applyForce(globals.vector(gravity.x, (ball.r / 5) * gravity.y))
                        ball.applyForce(globals.vector((ball.r / 5) * wind.x, wind.y))
                        // set new position vector based on force -> acc -> vel -> pos
                        ball.move()
                        // prevent ball from going beyond the bounds of the canvas
                        // inverse acceleration is 4/5 of original vector.y
                        ball.bounceY(0 + ball.r, height - ball.r, .8)
                        ball.bounceX(0 + ball.r, width - ball.r, .8)
                    }
                })
            })
        }
    }, [windowWidth, windowHeight])

    let isFullscreen = !!fullscreen ? 'fullscreen' : 'not-fullscreen'
    return (
        <div className={`canvas-container__forces ${isFullscreen}`}></div>
    )
}
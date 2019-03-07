import React, { useEffect } from 'react'
import g from '../../graphic'

export default () => {

    useEffect(() => {
        const container = document.querySelector('.canvas-container__random-walker')
        const {
            backgrounds,
            globals,
            helpers,
            shapes,
            structure
        } = g
        
        if (container !== null) {
            // define canvas & get context, width & height variables
            const { c, width, height } = structure.canvas({
                width: 400,
                height: 400,
                id: 'random-walker',
                el: container
            })
            // global config variable for circle radius & vector size
            const unit = 8

            // define walker
            const walker = shapes.circle(c, width / 2, height / 2, unit)
            walker.history = []

            structure.animate(() => {
                // redraw background
                backgrounds.bgsolid(c)
                // add current ball position to history array
                walker.history.push(walker.pos.copy())
                // limit history array to 100 items
                if (walker.history.length > 200) walker.history.shift()
                // draw circle at each position in history
                walker.history.forEach(pos => {
                    // set colour values based on pos co-ordinates
                    let colourX = helpers._map(pos.x, 0, width, 0, 255)
                    let colourY = helpers._map(pos.y, 0, height, 0, 255)
                    // draw circle with values determined above
                    shapes.circle(c, pos.x, pos.y, unit).draw(`rgba(${colourX}, 0, ${colourY}, .6)`)
                })
                
                // randomly create vector to be added to ball position
                let dir = Math.random()
                if (dir <= .25) walker.acc = globals.vector(0, unit * 2)
                else if (dir <= .5) walker.acc = globals.vector(unit * 2, 0)
                else if (dir <= .75) walker.acc = globals.vector(0, -unit * 2)
                else walker.acc = globals.vector(-unit * 2, 0)

                // draw ball at new position
                walker.move()
                walker
                    .draw('#333')
                    .outline({ weight: 2, colour: '#fff' })
                    .wrapX(0 + walker.r, width - walker.r)
                    .wrapY(0 + walker.r, height - walker.r)
            }, 10) // <-- end of animate()
        } // <-- end of if (container !== null)
    }, []) // <-- end of useEffect()

    return (
        <div className='canvas-container__random-walker'></div>
    )
}
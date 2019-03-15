import React from 'react'

// import child components
import Example from './Example'
import { MouseAttraction, RandomWalker } from '../../Canvases'

export default () => (
    <div className='page page__examples'>
        <Example>
            <RandomWalker />
        </Example>

        <Example>
            <MouseAttraction fullscreen={ false } />
        </Example>
    </div>
)
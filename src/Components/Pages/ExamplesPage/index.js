import React from 'react'
import { Route } from 'react-router-dom'

import './page.css'
import data from './data'

// import child components
import Example from './Example'
import { RandomWalker, RandomWalkerCode } from '../../Canvases'

export default () => (
    <div className='page page__examples'>
        <Route path='/examples/random-walker' render={() => (
            <Example data={ data.walker }>
                <RandomWalker />
                <RandomWalkerCode />
            </Example>
         )} />
    </div>
)
import React from 'react'
import { Route } from 'react-router-dom'

import './page.css'
import data from './data'

// import child components
import ExampleNav from './ExampleNav/ExampleNav'
import Example from './Example/Example'
import { MouseAttraction, RandomWalker, RandomWalkerCode } from '../../Canvases'

export default () => (
    <div className='page page__examples'>
        <Route exact path='/examples' component={ ExampleNav } />
        <Route path='/examples/random-walker' render={() => (
            <Example data={ data.walker }>
                <RandomWalker />
                <RandomWalkerCode />
            </Example>
         )} />
         <Route path='/examples/mouse-attraction' render={() => (
             <Example data={ data.mouse }>
                <MouseAttraction />
                <RandomWalkerCode />
             </Example>
         )} />
    </div>
)
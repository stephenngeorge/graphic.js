import React from 'react'
import { Link } from 'react-router-dom'

import './ExampleNav.css'

// import assets
import { play_icon } from '../../../../assets'

export default () => (
    <ul className='example-nav'>
        <li className='example-nav__item'>
            <img src={ play_icon } alt='select' />
            <Link to='/examples/random-walker'>Random Walker</Link>
        </li>
        <li className='example-nav__item'>
            <img src={ play_icon } alt='select' />
            <Link to='/examples/mouse-attraction'>Mouse Attraction</Link>
        </li>
        <li className='example-nav__item'>
            <img src={ play_icon } alt='select' />
            <Link to='/examples/forces'>Forces</Link>
        </li>
    </ul>
)
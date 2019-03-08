import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

// import assets
import {
    about_icon,
    contact_icon,
    examples_icon,
    home_icon,
    repo_icon
} from '../../../assets'

export default () => {
    return (
        <div className='nav__wrapper'>
            <button className='btn__nav'>menu</button>
            <ul className='nav'>
                <li className='nav__item'>
                    <Link to='/' className='nav__item--link'>
                        <img src={ home_icon } alt='home' />
                        <p>home</p>
                    </Link>
                </li>

                <li className='nav__item'>
                    <Link to='/philosophy' className='nav__item--link'>
                        <img src={ about_icon } alt='philosophy' />
                        <p>philosophy</p>
                    </Link>
                </li>

                <li className='nav__item'>
                    <Link to='/examples' className='nav__item--link'>
                        <img src={ examples_icon } alt='examples' />
                        <p>examples</p>
                    </Link>
                </li>

                <li className='nav__item'>
                    <a target="_blank" rel='noopener noreferrer' href="https://github.com/stephenngeorge/graphicjs" className='nav__item--link'>
                        <img src={ repo_icon } alt='repo' />
                        <p>source code</p>
                    </a>
                </li>

                <li className='nav__item'>
                    <Link to='/contact' className='nav__item--link'>
                        <img src={ contact_icon } alt='contact' />
                        <p>contact</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

// import assets
import {
    about_icon,
    contact_icon,
    examples_icon,
    home_icon,
    repo_icon
} from '../../assets'

export default () => {
    return (
        <ul>
            <li>
                <Link to='/'>
                    <img src={ home_icon } alt='home' />
                    <p>home</p>
                </Link>
            </li>

            <li>
                <Link to='/philosophy'>
                    <img src={ about_icon } alt='philosophy' />
                    <p>philosophy</p>
                </Link>
            </li>

            <li>
                <Link to='/examples'>
                    <img src={ examples_icon } alt='examples' />
                    <p>examples</p>
                </Link>
            </li>

            <li>
                <a target="_blank" href="#">
                    <img src={ repo_icon } alt='repo' />
                    <p>source code</p>
                </a>
            </li>

            <li>
                <Link to='/contact'>
                    <img src={ contact_icon } alt='contact' />
                    <p>contact</p>
                </Link>
            </li>
        </ul>
    )
}
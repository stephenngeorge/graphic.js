import React from 'react'

// import assets
import { repo_icon } from '../../../assets'

import './Example.css'

export default props => {

    let flip = () => {
        document.querySelector('.example-card').classList.toggle('flipped')
    }

    return (
        <div className='wrapper'>
            <button className='btn__toggle' onClick={ flip }>
                <img src={ repo_icon } alt='view source code' />
            </button>
            <div className='example-card'>
                <div className='example-card__front'>{
                    props.children
                }</div>
                <div className='example-card__back'>BACKFACE</div>
            </div>
        </div>
    )
}
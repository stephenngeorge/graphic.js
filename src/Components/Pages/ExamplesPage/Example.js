import React from 'react'

export default (props) => (
    <div className='example-card'>
        <div className='example-card__front'>{
            props.children
        }</div>
        <div className='example-card__back'></div>
    </div>
)
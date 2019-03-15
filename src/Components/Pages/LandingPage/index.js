import React from 'react'

// import child components
import MainText from './MainText/MainText'
import { MouseAttraction } from '../../Canvases'

export default () => (
    <>
        <MainText />
        <MouseAttraction fullscreen={ true } />
    </>
)
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'

// import globals
import { Nav } from './components/Globals'
// import pages
import { LandingPage } from './components/Pages'

export default () => (
  <Router>
    <div className="App">

      <Nav />  
      <Route exact path='/' component={ LandingPage }/>

    </div>
  </Router>
)
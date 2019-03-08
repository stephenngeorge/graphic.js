import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'

// import pages
import { LandingPage } from './components/Pages'

export default () => (
  <Router>
    <div className="App">
      
      <Route exact path='/' component={ LandingPage }/>

    </div>
  </Router>
)
import React from 'react'
import { Router, Route } from 'wouter'

import { HomeContainer } from './containers/HomeContainer'

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeContainer} />
    </Router>
  )
}

export default App

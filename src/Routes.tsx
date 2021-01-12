import React from 'react'
import { Router, Route } from 'wouter'

import { HomeContainer } from './containers/HomeContainer'
import { HousesContainer } from './containers/HousesContainer'
import { BookDetailsContainer } from './containers/BookDetailsContainer'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={HomeContainer} />
      <Route path="/houses" component={HousesContainer} />
      <Route path="/book/:isbn" component={BookDetailsContainer} />
    </Router>
  )
}

export default Routes

import React from 'react'
import { Router, Route } from 'wouter'

import { HomeContainer } from './containers/HomeContainer'
import { BookDetailsContainer } from './containers/BookDetailsContainer'
import { HousesContainer } from './containers/HousesContainer'
import { HouseDetailsContainer } from './containers/HouseDetailsContainer'
import { CharactersContainer } from './containers/CharactersContainer'
import { CharacterDetailsContainer } from './containers/CharacterDetailsContainer'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={HomeContainer} />
      <Route path="/book/:isbn" component={BookDetailsContainer} />
      <Route path="/houses" component={HousesContainer} />
      <Route path="/house/:id" component={HouseDetailsContainer} />
      <Route path="/characters" component={CharactersContainer} />
      <Route path="/characters/:id" component={CharacterDetailsContainer} />
    </Router>
  )
}

export default Routes

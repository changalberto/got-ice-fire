import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeContainer } from './containers/HomeContainer'
import { BookDetailsContainer } from './containers/BookDetailsContainer'
import { HousesContainer } from './containers/HousesContainer'
import { HouseDetailsContainer } from './containers/HouseDetailsContainer'
import { CharactersContainer } from './containers/CharactersContainer'
import { CharacterDetailsContainer } from './containers/CharacterDetailsContainer'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:id" component={BookDetailsContainer} />
      <Route path="/houses" component={HousesContainer} />
      <Route path="/house/:id" component={HouseDetailsContainer} />
      <Route path="/characters" component={CharactersContainer} />
      <Route path="/character/:id" component={CharacterDetailsContainer} />
    </Switch>
  )
}

export default Routes

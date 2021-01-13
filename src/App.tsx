import React from 'react'

import { PrimaryHeader } from './modules'
import Routes from './Routes'

const App = () => {
  return (
    <div className="main-container">
      <PrimaryHeader />
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App

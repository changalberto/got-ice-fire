import React from 'react'
import { Link } from 'wouter'

import Routes from './Routes'

const App = () => {
  return (
    <>
      <nav>
        <Link href="/">Books</Link>
        <Link href="/Houses">Houses</Link>
      </nav>
      <Routes />
    </>
  )
}

export default App

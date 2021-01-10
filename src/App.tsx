import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './store'
import { setBreakpoint } from './store/actions/layoutsActions'

import logo from './logo.svg'
import './App.scss'

function App() {
  const layouts = useSelector((state: RootState) => state.layouts)
  const dispatch = useDispatch()

  const handleChangeBreakpoint = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setBreakpoint('desktop'))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <p>Current Breakpoint: {layouts.breakpoint}</p>
        <button onClick={handleChangeBreakpoint}>Set Breakpoint</button>
      </header>
    </div>
  )
}

export default App

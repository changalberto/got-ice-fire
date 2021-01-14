import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import 'normalize.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import store from './store'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

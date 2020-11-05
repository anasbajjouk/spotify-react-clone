import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import history from '../common/history'
import Initialize from '../components/initialize/Initialize'
//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'
import { ToastContainer } from 'react-toastify'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Initialize />
        <ToastContainer />
      </Router>
    </Provider>
  </ThemeProvider>
)

export default RouterApp

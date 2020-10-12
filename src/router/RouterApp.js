import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../common/history'

//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'
import Initialize from '../components/initialize/Initialize'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Switch>
          <Initialize />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
)

export default RouterApp

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../common/history'
import Login from '../pages/login/Login'
//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default RouterApp

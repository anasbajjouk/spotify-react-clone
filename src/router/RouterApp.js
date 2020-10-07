import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Router, Switch } from 'react-router-dom'
import history from '../common/history'

//Themes
import theme from '../common/theme'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route path="/">
          <h1>Hello, Bye bye scaffolding hussle</h1>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)

export default RouterApp

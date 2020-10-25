import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import history from '../common/history'

//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'

import Initialize from '../components/initialize/Initialize'
import Page404 from '../pages/page404/page-404.component'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <Switch>
          <Initialize />
          <Route component={Page404} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
)

export default RouterApp

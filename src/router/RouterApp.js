import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// import history from '../common/history'

//Themes
import theme from '../common/theme'
import { GlobalStyles } from '../common/globalStyle'

import Initialize from '../components/initialize/Initialize'

const RouterApp = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter >
        <GlobalStyles />
        <Switch>
          <Initialize />
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
)

export default RouterApp

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer.jsx'
import Top from './containers/Top.jsx'

// require('./main.css')
require('../scss/index.scss')

const store = applyMiddleware(thunk)(createStore)(reducer)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Top} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

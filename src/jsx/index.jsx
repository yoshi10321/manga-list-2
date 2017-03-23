import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer.jsx'
import Top from './containers/Top.jsx'

require('../scss/index.scss')

const store = applyMiddleware(thunk)(createStore)(reducer)

render(
  <Router>
    <MuiThemeProvider>
      <Provider store={store}>
        <Route path='/' component={Top} />
      </Provider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer.jsx'
import Top from './containers/top.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

require('../scss/index.scss')

const store = applyMiddleware(thunk)(createStore)(reducer)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path='/' component={Top} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

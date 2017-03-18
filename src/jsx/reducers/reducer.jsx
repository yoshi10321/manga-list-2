import { combineReducers } from 'redux'

import userList from './userList'
import sample from './sample'

const reducer = combineReducers({
  userList,
  sample
})

export default reducer

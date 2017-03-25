import { combineReducers } from 'redux'

import userList from './userList'
import mangaList from './mangaList'
import sample from './sample'

const reducer = combineReducers({
  userList,
  mangaList,
  sample
})

export default reducer

import { combineReducers } from 'redux'

import userList from './userList'
import mangaList from './mangaList'
import manga from './manga'
import sample from './sample'

const reducer = combineReducers({
  userList,
  mangaList,
  manga,
  sample
})

export default reducer

import { combineReducers } from 'redux'

import userList from './userList'
import mangaList from './mangaList'
import manga from './manga'
import sample from './sample'
import editCard from './editCard'
import addCard from './addCard'

const reducer = combineReducers({
  userList,
  mangaList,
  manga,
  sample,
  editCard,
  addCard
})

export default reducer

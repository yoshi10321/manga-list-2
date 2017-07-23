import { types } from '../actions/fetchMangaList'

const defaultState = {
  data: []
}

function mangaList (state = defaultState, action) {
  const {
    data
  } = action
  switch (action.type) {
    case types.FETCH_MANGA_LIST_SUCCESS: {
      return Object.assign({}, state, {
        data
      })
    }
    case types.FETCH_MANGA_LIST_ERROR: {
      return {}
    }
    default:
      return state
  }
}

export default mangaList

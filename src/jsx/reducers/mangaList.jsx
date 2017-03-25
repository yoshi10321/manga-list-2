import { types } from '../actions/manga'

const defaultState = {
  data: []
}

function mangaList (state = defaultState, action) {
  const {
    data
  } = action
  switch (action.type) {
    case types.FETCH_MANGA_SUCCESS: {
      return {
        data
      }
    }
    case types.FETCH_MANGA_ERROR: {
      return {}
    }
    default:
      return state
  }
}

export default mangaList

import { types } from '../actions/fetchManga'

const defaultState = {
  data: []
}

function manga (state = defaultState, action) {
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

export default manga

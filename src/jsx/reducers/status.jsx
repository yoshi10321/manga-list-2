import { REGIST_MANGA_SUCCESS, REGIST_MANGA_ERROR } from '../actions/registManga'

const defaultState = {
  registManga: ''
}

function status (state = defaultState, action) {
  switch (action.type) {
    case REGIST_MANGA_SUCCESS: {
      return {
        registManga: 'success'
      }
    }
    case REGIST_MANGA_ERROR: {
      return {
        registManga: 'error'
      }
    }
    default:
      return state
  }
}

export default status

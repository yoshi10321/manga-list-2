import { REGIST_MANGA_LOADING_ON, REGIST_MANGA_LOADING_OFF } from '../actions/registManga'

const defaultState = {
  registMangaLoading: false
}

function loading (state = defaultState, action) {
  switch (action.type) {
    case REGIST_MANGA_LOADING_ON: {
      return {
        registMangaLoading: true
      }
    }
    case REGIST_MANGA_LOADING_OFF: {
      return {
        registMangaLoading: false
      }
    }
    default:
      return state
  }
}

export default loading

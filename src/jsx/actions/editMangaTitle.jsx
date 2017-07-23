import client from '../clients/apiClient'
import { fetchMangaList } from './fetchMangaList'

export const editMangaTypes = {
  EDIT_TITLE_SUCCESS: 'EDIT_TITLE_SUCCESS',
  EDIT_TITLE_ERROR: 'EDIT_TITLE_ERROR',
  EDIT_MANGA_LOADING_ON: 'EDIT_MANGA_LOADING_ON',
  EDIT_MANGA_LOADING_OFF: 'EDIT_MANGA_LOADING_OFF'
}

function editTitleSuccess (id, title) {
  return {
    type: editMangaTypes.EDIT_TITLE_SUCCESS,
    id,
    title
  }
}

function editTitleError () {
  return {
    type: editMangaTypes.EDIT_TITLE_ERROR
  }
}

function onLoading () {
  return {
    type: editMangaTypes.EDIT_MANGA_LOADING_ON
  }
}

function offLoading () {
  return {
    type: editMangaTypes.EDIT_MANGA_LOADING_OFF
  }
}

export const editMangaTitle = (id, title) => {
  return dispatch => {
    dispatch(onLoading())
    return client.post(
      'mangas/' + id,
      {
        title
      }
    )
    .then(res => {
      dispatch(offLoading())
      dispatch(editTitleSuccess(id, title))
      dispatch(fetchMangaList())
    }).catch(() => {
      dispatch(offLoading())
      dispatch(editTitleError())
    })
  }
}

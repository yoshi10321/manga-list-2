import client from '../clients/apiClient'
import { fetchMangaList } from './fetchMangaList'

export const EDIT_NUMBER_SUCCESS = 'EDIT_NUMBER_SUCCESS'
export const EDIT_NUMBER_ERROR = 'EDIT_NUMBER_ERROR'
export const EDIT_NUMBER_LOADING_ON = 'EDIT_MANGA_LOADING_ON'
export const EDIT_NUMBER_LOADING_OFF = 'EDIT_MANGA_LOADING_OFF'

function editNumberSuccess (id, number) {
  return {
    type: EDIT_NUMBER_SUCCESS,
    id,
    number
  }
}

function editNumberError () {
  return {
    type: EDIT_NUMBER_ERROR
  }
}

function onLoading () {
  return {
    type: EDIT_NUMBER_LOADING_ON
  }
}

function offLoading () {
  return {
    type: EDIT_NUMBER_LOADING_OFF
  }
}

export const editMangaNumber = (id, number) => {
  return dispatch => {
    dispatch(onLoading())
    return client.post(
      'mangas/' + id,
      {
        number
      }
    )
    .then(res => {
      dispatch(offLoading())
      dispatch(editNumberSuccess(id, number))
      dispatch(fetchMangaList())
    }).catch(() => {
      dispatch(offLoading())
      dispatch(editNumberError())
    })
  }
}

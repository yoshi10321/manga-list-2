import client from '../clients/apiClient'

export const types = {
  FETCH_MANGA_LIST_SUCCESS: 'FETCH_MANGA_LIST_SUCCESS',
  FETCH_MANGA_LIST_ERROR: 'FETCH_MANGA_LIST_ERROR'
}

function fetchMangaListSuccess (data) {
  return {
    type: types.FETCH_MANGA_LIST_SUCCESS,
    data
  }
}

function fetchMangaListError () {
  return {
    type: types.FETCH_MANGA_LIST_ERROR
  }
}

export const fetchMangaList = () => {
  return dispatch => {
    return client.get(
      'mangas',
    ).then(res => {
      dispatch(fetchMangaListSuccess(res.data))
    }).catch(() => {
      dispatch(fetchMangaListError())
    })
  }
}

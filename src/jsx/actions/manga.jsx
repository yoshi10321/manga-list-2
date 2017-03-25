import client from '../clients/sampleClient'

export const types = {
  FETCH_MANGA_SUCCESS: 'FETCH_MANGA_SUCCESS',
  FETCH_MANGA_ERROR: 'FETCH_MANGA_ERROR'
}

function fetchMangaSuccess (data) {
  return {
    type: types.FETCH_MANGA_SUCCESS,
    data
  }
}

function fetchMangaError () {
  return {
    type: types.FETCH_MANGA_ERROR
  }
}

export const fetchMangaList = () => {
  return dispatch => {
    return client.get(
      'mangas',
    ).then(res => {
      dispatch(fetchMangaSuccess(res.data))
    }).catch(() => {
      dispatch(fetchMangaError())
    })
  }
}

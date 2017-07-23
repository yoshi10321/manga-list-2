import client from '../clients/apiClient'

export const types = {
  REGIST_MANGA_SUCCESS: 'REGIST_MANGA_SUCCESS',
  REGIST_MANGA_ERROR: 'REGIST_MANGA_ERROR',
  REGIST_MANGA_LOADING_ON: 'REGIST_MANGA_LOADING_ON',
  REGIST_MANGA_LOADING_OFF: 'REGIST_MANGA_LOADING_OFF'
}

function registMangaSuccess (data) {
  return {
    type: types.REGIST_MANGA_SUCCESS,
    data
  }
}

function registMangaError () {
  return {
    type: types.REGIST_MANGA_ERROR
  }
}

function onLoading () {
  return {
    type: types.REGIST_MANGA_LOADING_ON
  }
}

function offLoading () {
  return {
    type: types.REGIST_MANGA_LOADING_OFF
  }
}

export const registManga = (title, imgUrl) => {
  return dispatch => {
    dispatch(onLoading())
    return client.post(
      'mangas',
      {
        title,
        imgUrl
      }
    )
    .then(res => {
      dispatch(offLoading())
      dispatch(registMangaSuccess(res.data))
    }).catch(() => {
      dispatch(offLoading())
      dispatch(registMangaError())
    })
  }
}

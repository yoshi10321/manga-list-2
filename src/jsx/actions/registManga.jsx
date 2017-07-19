import client from '../clients/sampleClient'

export const types = {
  REGIST_MANGA_SUCCESS: 'REGIST_MANGA_SUCCESS',
  REGIST_MANGA_ERROR: 'REGIST_MANGA_ERROR'
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

export const registManga = (title, imgUrl) => {
  return dispatch => {
    return client.post(
      'mangas',
      {
        title,
        imgUrl
      }
    )
    .then(res => {
      dispatch(registMangaSuccess(res.data))
    }).catch(() => {
      dispatch(registMangaError())
    })
  }
}

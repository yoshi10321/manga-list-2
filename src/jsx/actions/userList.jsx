import client from '../clients/sampleClient'

export const types = {
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR'
}

function fetchUserSuccess (data) {
  return {
    type: types.FETCH_USER_SUCCESS,
    data
  }
}

function fetchUserError () {
  return {
    type: types.FETCH_USER_ERROR
  }
}

export const fetchUserList = () => {
  return dispatch => {
    return client.get(
      'users',
    ).then(res => {
      dispatch(fetchUserSuccess(res.data))
    }).catch(() => {
      dispatch(fetchUserError())
    })
  }
}

import { types } from '../actions/userList'

const defaultState = {
  data: []
}

function userList (state = defaultState, action) {
  const {
    data
  } = action
  switch (action.type) {
    case types.FETCH_USER_SUCCESS: {
      return {
        data
      }
    }
    case types.FETCH_USER_ERROR: {
      return {}
    }
    default:
      return state
  }
}

export default userList

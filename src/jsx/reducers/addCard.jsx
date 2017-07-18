import { SHOW_ADD_CARD } from '../actions/showAddCard'
import { CLOSE_ADD_CARD } from '../actions/closeAddCard'

const defaultState = {
  selected: false
}

function addCard (state = defaultState, action) {
  switch (action.type) {
    case SHOW_ADD_CARD: {
      return {
        selected: true
      }
    }
    case CLOSE_ADD_CARD: {
      return {
        selected: false
      }
    }
    default:
      return state
  }
}

export default addCard

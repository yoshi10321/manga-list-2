import { SHOW_EDIT_CARD } from '../actions/showEditCard'
import { CLOSE_EDIT_CARD } from '../actions/closeEditCard'

const defaultState = {
  title: '',
  readNumber: 0,
  img: '',
  selected: false
}

function editCard (state = defaultState, action) {
  const {
    manga
  } = action
  switch (action.type) {
    case SHOW_EDIT_CARD: {
      return {
        id: manga.id,
        title: manga.title,
        readNumber: manga.readNumber,
        img: manga.img,
        selected: true
      }
    }
    case CLOSE_EDIT_CARD: {
      return {
        id: 0,
        title: '',
        readNumber: 0,
        img: '',
        selected: false
      }
    }
    default:
      return state
  }
}

export default editCard

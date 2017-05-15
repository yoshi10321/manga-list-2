import { SHOW_EDIT_CARD } from '../actions/showEditCard'
import { CLOSE_EDIT_CARD } from '../actions/closeEditCard'
import { EDIT_COUNT, EDIT_TITLE } from '../actions/switchEditContent'

const defaultState = {
  title: '',
  readNumber: 0,
  img: '',
  selected: false,
  contentType: 'count'
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
    case EDIT_COUNT: {
      return {
        id: state.id,
        title: state.title,
        readNumber: state.readNumber,
        img: state.img,
        selected: state.selected,
        contentType: 'count'
      }
    }
    case EDIT_TITLE: {
      return {
        id: state.id,
        title: state.title,
        readNumber: state.readNumber,
        img: state.img,
        selected: state.selected,
        contentType: 'title'
      }
    }
    default:
      return state
  }
}

export default editCard

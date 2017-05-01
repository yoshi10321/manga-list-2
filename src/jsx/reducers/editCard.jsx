import { types } from '../actions/showEditCard'

const defaultState = {
  title: '',
  readNumber: 0,
  img: ''
}

function editCard (state = defaultState, action) {
  const {
    manga
  } = action
  switch (action.type) {
    case types.SHOW_EDIT_CARD: {
      return {
        id: manga.id,
        title: manga.title,
        readNumber: manga.readNumber,
        img: manga.img
      }
    }
    default:
      return state
  }
}

export default editCard

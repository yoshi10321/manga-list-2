export const types = {
  SHOW_EDIT_CARD: 'SHOW_EDIT_CARD'
}

export const showEditCard = (manga) => {
  return {
    type: types.SHOW_EDIT_CARD,
    manga
  }
}

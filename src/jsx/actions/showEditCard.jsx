export const SHOW_EDIT_CARD = 'SHOW_EDIT_CARD'

export const showEditCard = (manga) => {
  return {
    type: SHOW_EDIT_CARD,
    manga
  }
}

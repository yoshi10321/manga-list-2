import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../scss/mangaList.scss')

export class MangaList extends React.PureComponent {
  constructor (props) {
    super(props)
    this.editManga = this.editManga.bind(this)
  }

  editManga (manga) {
    const { dispatch } = this.props
    dispatch(this.props.showEditCard(manga))
  }

  render () {
    const { mangaList } = this.props
    let listItems
    if (mangaList) {
      listItems = mangaList.data.map((manga) =>
        <li key={manga.id} className='manga-list-item' onClick={() => this.editManga(manga)}>
          <div className='manga-list-container'>
            <img src={manga.img} className='manga-list-img' />
            <div className='manga-list-overlay'>
              <p className='manga-list-title'>{manga.title}</p>
              <p className='manga-list-read-number'>{manga.readNumber}</p>
            </div>
          </div>
        </li>
      )
    }

    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

MangaList.propTypes = {
  mangaList: PropTypes.object,
  manga: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  showEditCard: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(MangaList)

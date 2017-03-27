import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../scss/mangaList.scss')

export class MangaList extends React.PureComponent {

  render () {
    const { mangaList } = this.props
    let listItems
    if (mangaList) {
      listItems = mangaList.data.map((manga) =>
        <li key={manga.id} className='manga-list-item'>
          <img src={manga.img} className='manga-list-img' />
          <p className='manga-list-title'>{manga.title}</p>
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
  mangaList: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(MangaList)

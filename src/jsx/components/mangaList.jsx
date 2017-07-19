import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { showEditCard } from '../actions/showEditCard'
import { closeAddCard } from '../actions/closeAddCard'
import { fetchMangaList } from '../actions/fetchMangaList'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'

require('../../scss/mangaList.scss')

const titleStyle = {
  fontSize: '15px'
}
const cardStyle = {
  margin: '0 5px 7px 5px'
}

export class MangaList extends React.PureComponent {
  constructor (props) {
    super(props)
    this.showEditCard = this.showEditCard.bind(this)
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchMangaList())
  }

  showEditCard (manga) {
    const { dispatch } = this.props
    dispatch(closeAddCard())
    dispatch(showEditCard(manga))
  }

  render () {
    const { mangaList } = this.props
    let listItems
    if (mangaList) {
      listItems = mangaList.data.map((manga) =>
        <li key={manga.id} className='manga-list-item' onClick={() => this.showEditCard(manga)}>
          <Card style={cardStyle}>
            <CardMedia
              overlay={<CardTitle title={manga.title} subtitle={manga.readNumber} titleStyle={titleStyle} />}
              >
              <div className='manga-list-container'>
                <img className='manga-list-img' src={manga.img} />
              </div>
            </CardMedia>
          </Card>
        </li>
      )
    }

    return (
      <div>
        <ul className='manga-list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

MangaList.propTypes = {
  mangaList: PropTypes.object,
  manga: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(MangaList)

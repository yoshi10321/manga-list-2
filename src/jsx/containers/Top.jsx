import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MangaList from '../components/mangaList'
import EditCard from '../components/editCard'
import { fetchMangaList } from '../actions/fetchMangaList'
import { showEditCard } from '../actions/showEditCard'

injectTapEventPlugin()

export var Top = class Top extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchMangaList())
  }

  render () {
    const {mangaList} = this.props
    return (
      <div>
        <h1>top page</h1>
        <br />
        <MangaList mangaList={mangaList} showEditCard={showEditCard} />
        <EditCard editCard={this.props.editCard} />
      </div>
    )
  }
}

Top.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mangaList: PropTypes.object,
  editCard: PropTypes.object
}

export default connect()(Top)

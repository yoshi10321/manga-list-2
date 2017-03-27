import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MangaList from '../components/mangaList'
import { fetchMangaList } from '../actions/fetchMangaList'

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
        <MangaList mangaList={mangaList} />
      </div>
    )
  }
}

Top.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mangaList: PropTypes.object
}

export default connect()(Top)

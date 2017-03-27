// import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Manga from '../components/manga'
import { fetchManga } from '../actions/fetchManga'

// injectTapEventPlugin()

export var Detail = class Detail extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchManga())
  }

  render () {
    const {manga} = this.props
    return (
      <div>
        <h1>detail</h1>
        <br />
        <Manga manga={manga} />
      </div>
    )
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  manga: PropTypes.object
}

export default connect()(Detail)

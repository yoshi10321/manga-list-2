import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../scss/mangaList.scss')

export class Manga extends React.PureComponent {

  render () {
    // const { manga } = this.props

    return (
      <div>
        <p>test</p>
      </div>
    )
  }
}

Manga.propTypes = {
  manga: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Manga)

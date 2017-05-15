import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class Title extends React.PureComponent {

  render () {
    const { title } = this.props

    let titleEditContainer = ''
    titleEditContainer = (
      <div className='counter' >
        <input type='text' value={title} />
      </div>
    )

    return (
      <div>
        {titleEditContainer}
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Title)

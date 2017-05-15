import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export class Counter extends React.PureComponent {

  render () {
    const { readNumber } = this.props

    let counter = ''
    counter = (
      <div className='counter' >
        <button>-</button>
        { readNumber }
        <button>+</button>
      </div>
    )

    return (
      <div>
        { counter }
      </div>
    )
  }
}

Counter.propTypes = {
  readNumber: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Counter)

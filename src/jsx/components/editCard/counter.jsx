import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../../scss/counter.scss')

export class Counter extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      count: props.readNumber
    }
    this.inclementCount = this.inclementCount.bind(this)
    this.declementCount = this.declementCount.bind(this)
  }

  inclementCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  declementCount () {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    let counter = ''
    counter = (
      <div className='counter' >
        <button onClick={this.declementCount}>-</button>
        { this.state.count }
        <button onClick={this.inclementCount}>+</button>
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
  readNumber: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Counter)

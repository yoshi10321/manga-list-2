import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/test'

export var Test = class Test extends React.PureComponent {

  render () {
    this.state = this.props
    return (
      <div>
        <p>react reduxサンプル</p>
        <p>{this.state.fuga}</p>
        <button onClick={() => this.state.incrementClick()}>増加</button>
      </div>
    )
  }
}

// ↓redux
function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    incrementClick: () => { dispatch(increment()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)

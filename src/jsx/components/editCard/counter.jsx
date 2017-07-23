import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { editMangaNumber } from '../../actions/editMangaNumber'

require('../../../scss/counter.scss')

export class Counter extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      count: props.readNumber
    }
    this.inclementCount = this.inclementCount.bind(this)
    this.declementCount = this.declementCount.bind(this)
  }

  inclementCount () {
    this.setState({
      count: this.state.count + 1
    })
    const { dispatch } = this.props
    dispatch(editMangaNumber(this.state.id, this.state.count + 1))
  }

  declementCount () {
    this.setState({
      count: this.state.count - 1
    })
    const { dispatch } = this.props
    dispatch(editMangaNumber(this.state.id, this.state.count - 1))
  }

  render () {
    let counter = ''
    counter = (
      <div className='counter' >
        <FlatButton label='-' onClick={this.declementCount} />
        <span className='counter-number'>{ this.state.count }</span>
        <FlatButton label='+' onClick={this.inclementCount} />
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
  id: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Counter)

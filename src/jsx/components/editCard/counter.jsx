import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import { editMangaNumber } from '../../actions/editMangaNumber'

require('../../../scss/counter.scss')

const declementStyle = {
  // fontSize: '150px',
  // margin: '12px',
  // height: '120px',
  // width: '120px'
}

const inclementStyle = {
  // fontSize: '150px',
  // margin: '12px'
}

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
        <FlatButton label='-' style={declementStyle} onClick={this.declementCount} />
        <span className='counter-number'>{ this.state.count }</span>
        <FlatButton label='+' style={inclementStyle} onClick={this.inclementCount} />
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

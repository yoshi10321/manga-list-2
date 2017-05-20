import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../../scss/title.scss')

export class Title extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      textValue: props.title
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({
      textValue: e.target.value
    })
  }

  render () {
    // const { title } = this.props

    let titleEditContainer = ''
    titleEditContainer = (
      <div className='title' >
        <input type='text' value={this.state.textValue} onChange={this.onChange} />
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
  title: PropTypes.string,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Title)

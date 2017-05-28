import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'

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
        <TextField
          style={{fontSize: '20px', width: '80%'}}
          defaultValue={this.state.textValue}
          onChange={this.onChange}
        />
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

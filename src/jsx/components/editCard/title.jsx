import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import { editMangaTitle } from '../../actions/editMangaTitle'

require('../../../scss/title.scss')

export class Title extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      textValue: props.title
    }
    this.onChange = this.onChange.bind(this)
    this.editPost = this.editPost.bind(this)
  }

  onChange (e) {
    this.setState({
      textValue: e.target.value
    })
  }

  editPost () {
    const { dispatch } = this.props
    dispatch(editMangaTitle(this.state.id, this.state.textValue))
  }

  render () {
    let titleEditContainer = ''
    titleEditContainer = (
      <div className='title' >
        <TextField
          name='titleEditForm'
          style={{fontSize: '20px', width: '80%'}}
          defaultValue={this.state.textValue}
          onChange={this.onChange}
          onBlur={this.editPost}
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
  id: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(Title)

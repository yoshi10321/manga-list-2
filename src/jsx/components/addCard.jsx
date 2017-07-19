import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { closeAddCard } from '../actions/closeAddCard'
import { registManga } from '../actions/registManga'
import {Card} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

require('../../scss/addCard.scss')

export class AddCard extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      titleTextValue: '',
      imgURLTextValue: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleImgURLChange = this.handleImgURLChange.bind(this)
  }

  handleTitleChange (e) {
    this.setState({titleTextValue: e.target.value})
  }

  handleImgURLChange (e) {
    this.setState({imgURLTextValue: e.target.value})
  }

  render () {
    const { dispatch, addCard } = this.props

    let card = ''

    if (addCard.selected) {
      card = (
        <Card className='add-card'>
          <i className='material-icons add-card-close' onClick={() => dispatch(closeAddCard())}>clear</i>
          <TextField
            floatingLabelText='title'
            value={this.state.titleTextValue}
            onChange={this.handleTitleChange}
          />
          <TextField
            floatingLabelText='img url'
            value={this.state.imgURLTextValue}
            onChange={this.handleImgURLChange}
          />
          <FlatButton label='Regist' onClick={() => dispatch(registManga(this.state.titleTextValue, this.state.imgURLTextValue))} />
        </Card>
      )
    }

    return (
      <CSSTransitionGroup
        transitionName='add-card'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {card}
      </CSSTransitionGroup>
    )
  }
}

AddCard.propTypes = {
  addCard: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(AddCard)

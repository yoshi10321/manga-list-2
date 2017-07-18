import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { closeAddCard } from '../actions/closeAddCard'
import {Card} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

require('../../scss/addCard.scss')

export class AddCard extends React.PureComponent {

  render () {
    const { dispatch, addCard } = this.props

    let card = ''

    if (addCard.selected) {
      card = (
        <Card className='add-card'>
          <i className='material-icons add-card-close' onClick={() => dispatch(closeAddCard())}>clear</i>
          <TextField
            floatingLabelText='title'
          />
          <TextField
            floatingLabelText='img url'
          />
          <FlatButton label='Regist' />
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

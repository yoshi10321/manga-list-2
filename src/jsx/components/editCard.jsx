import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { closeEditCard } from '../actions/closeEditCard'
import { editCount, editTitle, editImage } from '../actions/switchEditContent'
import Counter from './editCard/counter'
import Title from './editCard/title'
import Image from './editCard/image'
import {Card, CardActions, CardMedia} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

require('../../scss/editCard.scss')

export class EditCard extends React.PureComponent {

  render () {
    const { dispatch, editCard } = this.props

    let card = ''
    let editContent = <Counter readNumber={editCard.readNumber} key={'counter'} />
    switch (editCard.contentType) {
      case 'count':
        editContent = <Counter readNumber={editCard.readNumber} key={'counter'} />
        break
      case 'title':
        editContent = <Title title={editCard.title} key={'title'} />
        break
      case 'image':
        editContent = <CardMedia><Image img={editCard.img} key={'image'} /></CardMedia>
        break
      default:
        editContent = <Counter readNumber={editCard.readNumber} key={'counter'} />
    }

    if (editCard.selected) {
      card = (
        <Card className='edit-card' key={editCard.id} >
          <div className='edit-card-content'>
            {editContent}
          </div>
          <i className='material-icons edit-card-close' onClick={() => dispatch(closeEditCard())}>clear</i>
          <CardActions>
            <FlatButton onClick={() => dispatch(editCount())} label='Count' />
            <FlatButton onClick={() => dispatch(editTitle())} label='Title' />
            <FlatButton onClick={() => dispatch(editImage())} label='Img' />
            <FlatButton label='Del' />
          </CardActions>
        </Card>
      )
    }

    return (
      <CSSTransitionGroup
        transitionName='edit-card'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {card}
      </CSSTransitionGroup>
    )
  }
}

EditCard.propTypes = {
  editCard: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(EditCard)

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { closeEditCard } from '../actions/closeEditCard'
import { editCount, editTitle, editImage } from '../actions/switchEditContent'
import Counter from './editCard/counter'
import Title from './editCard/title'
import Image from './editCard/image'

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
        editContent = <Image img={editCard.img} key={'image'} />
        break
      default:
        editContent = <Counter readNumber={editCard.readNumber} key={'counter'} />
    }

    if (editCard.selected) {
      card = (
        <div className='edit-card' key={editCard.id} >
          <div className='edit-card-content'>
            {editContent}
          </div>
          <button className='edit-card-close' onClick={() => dispatch(closeEditCard())}>close</button>
          <div className='edit-card-menu'>
            <ul>
              <li><a onClick={() => dispatch(editCount())}>count</a></li>
              <li><a onClick={() => dispatch(editTitle())}>title</a></li>
              <li><a onClick={() => dispatch(editImage())}>img</a></li>
              <li><a>del</a></li>
            </ul>
          </div>
        </div>
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

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

require('../../scss/editCard.scss')

export class EditCard extends React.PureComponent {

  render () {
    const { editCard } = this.props
    return (
      <CSSTransitionGroup
        transitionName='edit-card'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='edit-card' key={editCard.id} >
          <p>{ editCard.title }</p>
          <p>{ editCard.readNumber }</p>
        </div>
      </CSSTransitionGroup>
    )
  }
}

EditCard.propTypes = {
  editCard: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(EditCard)

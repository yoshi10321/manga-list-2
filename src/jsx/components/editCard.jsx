import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

require('../../scss/editCard.scss')

export class EditCard extends React.PureComponent {

  render () {
    const { editCard } = this.props
    return (
      <div className='edit-card'>
        <p>{ editCard.title }</p>
        <p>{ editCard.readNumber }</p>
      </div>
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

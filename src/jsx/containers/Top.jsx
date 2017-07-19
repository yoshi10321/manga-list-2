import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MangaList from '../components/mangaList'
import EditCard from '../components/editCard'
import AddCard from '../components/addCard'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import { showAddCard } from '../actions/showAddCard'
import { closeEditCard } from '../actions/closeEditCard'

require('../../scss/top.scss')

injectTapEventPlugin()

export var Top = class Top extends React.PureComponent {

  constructor (props) {
    super(props)
    this.showAddCard = this.showAddCard.bind(this)
  }

  showAddCard () {
    const { dispatch } = this.props
    dispatch(closeEditCard())
    dispatch(showAddCard())
  }

  render () {
    return (
      <div>
        <div className='top-title'>
          <h1>MANGA MANAGE</h1>
        </div>
        <div className='add-button'>
          <IconButton tooltip='Font Icon' onClick={() => (this.showAddCard())}>
            <FontIcon className='material-icons'>add</FontIcon>
          </IconButton>
        </div>
        <div className='list'>
          <MangaList />
        </div>
        <AddCard />
        <EditCard />
      </div>
    )
  }
}

Top.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Top)

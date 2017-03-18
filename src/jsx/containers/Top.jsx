import injectTapEventPlugin from 'react-tap-event-plugin'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Drawer from '../components/drawer'
import UserList from '../components/userList'
import { fetchUserList } from '../actions/userList'

injectTapEventPlugin()

export var Top = class Top extends React.PureComponent {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchUserList())
  }

  render () {
    const {userList} = this.props
    return (
      <div>
        <Drawer />
        <h1>top page</h1>
        <br />
        <UserList userList={userList} />
      </div>
    )
  }
}

Top.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userList: PropTypes.object
}

export default connect()(Top)

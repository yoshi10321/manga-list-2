import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import {Card, CardTitle} from 'material-ui/Card'

require('../../scss/userList.scss')

export class UserList extends React.PureComponent {

  render () {
    const { userList } = this.props
    const listItems = userList.data.map((user) =>
      <ListItem
        key={user.id}
        primaryText={user.name}
        secondaryText={
          <p>{user.email}</p>
        } />
    )

    return (
      <div>
        <Card className='userListCard'>
          <CardTitle title='UserList' />
          <List>{listItems}</List>
        </Card>
      </div>
    )
  }
}

UserList.propTypes = {
  userList: PropTypes.object
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(UserList)

import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

export default class CommonDrawer extends React.PureComponent {

  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () { this.setState({open: !this.state.open}) }

  handleClose () { this.setState({open: false}) }

  render () {
    return (
      <div>
        <AppBar
          title='react redux materialui sample'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}
          />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem onTouchTap={this.handleClose}>Menu1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu2</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu3</MenuItem>
        </Drawer>
      </div>
    )
  }
}

import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import muiThemeable from 'material-ui/styles/muiThemeable'

class SidebarMenu extends Component {
  static propTypes = {
    open: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      open: props.open ? props.open : false
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('open' in nextProps) {
      this.setState({
        open: nextProps.open
      })
    }
  }

  handleOnRequestChange = (open, reason) => {
    this.setState({
      open: false
    })
  }

  render () {
    return (
      <Drawer open={this.state.open} docked={false} onRequestChange={this.handleOnRequestChange}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    )    
  }
}

export default muiThemeable()(SidebarMenu)
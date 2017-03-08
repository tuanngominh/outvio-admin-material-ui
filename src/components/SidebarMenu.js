import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import {blueGrey800} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'
import logo from '../logo.svg'

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
        <AppBar 
          style={{backgroundColor: blueGrey800}} 
          title={<img src={logo} alt='Outvio logo' style={{height: '1.5em', marginTop: 14}} />}
          showMenuIconButton={false}
        />
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    )    
  }
}

export default muiThemeable()(SidebarMenu)
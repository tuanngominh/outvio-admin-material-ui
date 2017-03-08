import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'
import {blueGrey800, blueGrey500} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable'
import logo from '../logo.svg'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'
import {Card, CardHeader} from 'material-ui/Card';

const UserInfo = () => (
  <Card style={{backgroundColor: blueGrey500, borderRadius: 0, paddingTop: 10, paddingBottom: 10}}>
    <CardHeader
      titleStyle={{color: 'white'}}
      subtitleStyle={{color: 'white'}}
      title="John Smith"
      subtitle="Breastfeeling.com "
      avatar={<Avatar size={30}>JB</Avatar>}
      actAsExpander={true}
      showExpandableButton={true}
      openIcon={<FontIcon className="material-icons" color='white'>arrow_drop_up</FontIcon>}
      closeIcon={<FontIcon className="material-icons" color='white'>arrow_drop_down</FontIcon>}
    />
  </Card>
)

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
        <UserInfo />
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    )    
  }
}

export default muiThemeable()(SidebarMenu)
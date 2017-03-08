import React from 'react'
import AppBar from 'material-ui/AppBar'

import muiThemeable from 'material-ui/styles/muiThemeable'

const Header = (props) => {
  return (
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={props.onLeftIconButtonTouchTap}
    />
)}

export default muiThemeable()(Header)
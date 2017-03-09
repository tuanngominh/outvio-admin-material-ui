import React, { Component } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import '../App.css'

class App extends Component {
  state = {
    openSidebarMenu: false
  }

  handleOpenSidebarMenu = () => {
    this.setState({
      openSidebarMenu: true
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header onLeftIconButtonTouchTap={this.handleOpenSidebarMenu}/>
          <Sidebar open={this.state.openSidebarMenu}/>
          <div className="content">
            {this.props.children}
          </div>          
        </div>
      </MuiThemeProvider>  
    ) 
  }
}

export default App

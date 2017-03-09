import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {teal700, teal400} from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  toolbar: {
    backgroundColor: 'white',
    menuHoverColor: 'white',
    height: 'auto'
  },
  chip: {
    deleteIconColor: teal400,
    backgroundColor: teal700,
    textColor: 'white'
  },
  tableRowColumn: {
    spacing: 4
  }
})

export default muiTheme
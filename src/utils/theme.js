import { createMuiTheme, colors } from "@material-ui/core";
export default createMuiTheme({
    palette: {
        background: {
          dark: '#FFF',
          default: colors.common.white,
          paper: colors.common.white
        },
        primary: {
          main: "#FFF"
        },
        secondary: {
          main: colors.indigo[500]
        },
        text: {
          primary: colors.blueGrey[900],
          secondary: colors.blueGrey[600],
          logo : colors.orange[500],
        }
      },   
});
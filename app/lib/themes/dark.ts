import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: { main: grey[200] },
    secondary: { main: grey[400] },
    type: 'dark',
  },
});

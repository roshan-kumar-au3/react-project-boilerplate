import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0033cc',
    },
    action: {
      disabled: '#cbcbcb',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

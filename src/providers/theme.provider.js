import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core';
import { deepPurple, red } from '@material-ui/core/colors';

let theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: deepPurple[400]
    }
  },
  status: {
    danger: red
  },
});

theme.palette.background.default = '#191726';
theme.palette.text.primary = '#DCD8E5';


/* Responsive font sizes */
theme = responsiveFontSizes(theme);

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;

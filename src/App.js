import React from 'react';
import ForgotPassword from './containers/ForgotPasswordScreen';
import { CssBaseline } from '@material-ui/core';
import Theme from './providers/theme.provider';
const App = () => {
  return (
    <div className="App">
      <CssBaseline>
        <Theme>
          <ForgotPassword />
        </Theme>
      </CssBaseline>
    </div>
  );
};

export default App;

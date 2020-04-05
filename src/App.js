import React from 'react';
import ForgotPassword from './containers/ForgotPasswordScreen';
import { CssBaseline } from '@material-ui/core';
import Theme from './providers/theme.provider';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssBaseline>
        <Theme>
          <div className="App">
            <ForgotPassword />
          </div>
        </Theme>
      </CssBaseline>
    </div>
  );
};

export default App;

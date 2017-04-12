import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as  injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTabs from './ui/tabs/AppTabs';
import './index.css';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <AppTabs value={'hobbies'} />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);

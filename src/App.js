import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fff'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
    </ThemeProvider>
  );
}

export default App;

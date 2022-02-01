import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#3e8df5',
      contrastText: 'white',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

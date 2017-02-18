import React from 'react';

import UserTitle from './UserTitle.js';

import Paper from 'material-ui/Paper';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange300,
  },
});

const style = {
  height: 200,
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'block',
};

const PaperExampleSimple = () => (

  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Paper style={style} zDepth={1}>
        <UserTitle></UserTitle>
      </Paper>
    </div>
  </MuiThemeProvider>

);

export default PaperExampleSimple;



// <Paper style={style} zDepth={2} />
// <Paper style={style} zDepth={3} />
// <Paper style={style} zDepth={4} />
// <Paper style={style} zDepth={5} />



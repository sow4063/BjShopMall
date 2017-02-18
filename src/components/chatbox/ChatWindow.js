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

const paperStyle = {
  height: 200,
  width: '100%',
  display: 'block',
  overflow: 'scroll',
};

const PaperExampleSimple = (props) => (

  <MuiThemeProvider muiTheme={muiTheme}>
      <Paper style={paperStyle} zDepth={1}>
        { props.conversation.map( (obj, i) => {

            return (
              <UserTitle isMyMsg={props.user === obj.user} conversation={obj} key={i}></UserTitle>
            )
        
          } )
        
        }
      </Paper>
  </MuiThemeProvider>

);

export default PaperExampleSimple;



// <Paper style={style} zDepth={2} />
// <Paper style={style} zDepth={3} />
// <Paper style={style} zDepth={4} />
// <Paper style={style} zDepth={5} />



import React from 'react';
import TextField from 'material-ui/TextField';

import ChatSendBtn from './ChatSendBtn.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange300 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange300,
  },
});

class TextFieldExampleSimple extends React.Component {
	
	constructor(props) {
		super(props);
		
	}

	render(){
		
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
			  <div>
			    <TextField id="message" hintText="Hint Text" onChange={this.props.changeMsgState} />
			    <ChatSendBtn sendMessage={this.props.sendMessage}></ChatSendBtn>
			  </div>
		  </MuiThemeProvider>
		);

  }

};

export default TextFieldExampleSimple;
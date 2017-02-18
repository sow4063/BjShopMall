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

const divStyle = {
	width : '100%'
}
const textFieldStyle = {
	width : '80%'
}

const chatSendBtnStyle = {
	width: '20%'
}

class TextFieldExampleSimple extends React.Component {
	
	constructor(props) {
		super(props);
		
	}

	render(){
		
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
			  <div style={divStyle}>
			    <TextField id="message" hintText="Type Message" onChange={this.props.changeMsgState} style={textFieldStyle} />
			    <ChatSendBtn sendMessage={this.props.sendMessage} style={chatSendBtnStyle}></ChatSendBtn>
			  </div>
		  </MuiThemeProvider>
		);

  }

};

export default TextFieldExampleSimple;
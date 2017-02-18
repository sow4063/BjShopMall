import React from 'react';

import ChatWindow from './ChatWindow.js';
import UserTitle from './UserTitle.js';


class ChatBox extends React.Component{
	
	render(){
		
		return (
			<div>
				<h2>This is Chat Box!</h2>
				<ChatWindow></ChatWindow>
				<UserTitle></UserTitle>
			</div>
		)

	} // render end

}

export default ChatBox;
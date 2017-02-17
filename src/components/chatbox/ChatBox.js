import React from 'react';

import ChatWindow from './ChatWindow.js';
import ChatInput from './ChatInput.js';
import UserTitle from './UserTitle.js';

// import soket connect
import { socketConnect } from 'socket.io-react';

class ChatBox extends React.Component{
	
	constructor(props) {
		super(props);	
		this.listenMessage.bind(this)();
		this.state = {
			message : '',
			conversation : []
		}
	}

	//socket listen
	listenMessage(){
		
		var ChatBox = this;

		this.props.socket.on('sChatting', function(msgStr){
			console.log(msgStr);			
			ChatBox.setState({
				conversation : ChatBox.state.conversation.concat(msgStr)
			})
		});

	}

	//socket send
	sendMessage(){
		this.props.socket.emit('cMessage', this.state.message);
	}

	//change message state
	changeMsgState(e){
		this.setState({
			message : e.target.value
		})
	}


	render(){
		
		return (
				<div>
					<h2>This is Chat Box!</h2>				
					<ChatWindow></ChatWindow>
					<ChatInput sendMessage={this.sendMessage.bind(this)} changeMsgState={this.changeMsgState.bind(this)}></ChatInput>
					<UserTitle></UserTitle>
					{
						this.state.conversation.map( (msg, i) => {
						
							return(
								<div key={i}>{msg}</div>
							)

						} )

					}
				</div>
		)

	} // render end

}

export default socketConnect(ChatBox);
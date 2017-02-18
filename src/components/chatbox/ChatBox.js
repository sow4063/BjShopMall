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
			user : '',
			message : '',
			conversation : []
		}
	}

	//socket listen
	listenMessage(){
		
		var ChatBox = this;

		this.props.socket.on('sChatting', function(resObj){
			console.log(resObj);			
			ChatBox.setState({
				conversation : ChatBox.state.conversation.concat(resObj)
			})
		});

	}

	//socket send
	sendMessage(){
		var sendObj = {
			user : this.state.user, //this.props.user,
			message : this.state.message
		}
		this.props.socket.emit('cMessage', sendObj);
	}

	//change message state
	changeMsgState(e){
		this.setState({
			message : e.target.value
		})
	}

	changeUserState(e){
		this.setState({
			user : e.target.value
		})
	}


	render(){
		
		return (
				<div>
					<h2>This is Chat Box!</h2>	
					<ChatWindow user={this.state.user} conversation={this.state.conversation} ></ChatWindow>
					<ChatInput sendMessage={this.sendMessage.bind(this)} changeMsgState={this.changeMsgState.bind(this)}></ChatInput>					
					<input type="text" value={this.state.user} onChange={this.changeUserState.bind(this)}/>
				</div>
		)

					// {
					// 	this.state.conversation.map( (obj, i) => {
						
					// 		return(
					// 			<div key={i}>{obj.message}</div>
					// 		)

					// 	} )

					// }

	} // render end

}

export default socketConnect(ChatBox);

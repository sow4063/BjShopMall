import React from 'react';

import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';
import ChatBox from './chatbox/ChatBox.js';

//socket
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect(process.env.SOCKET_URL);
			socket.on('connectMsg', msg => console.log(msg));

class BroadCastRoom extends React.Component{
	
	constructor(props) {
		super(props);	
	}

	render(){
		
		return (

				<div>
          <Addproducts></Addproducts>
          <ProductLists></ProductLists>
          <Billbox></Billbox>	
					<SocketProvider socket={socket}>
						<ChatBox user='chan'/>
					</SocketProvider>
        </div>
		)

	} // render end

}

export default BroadCastRoom;

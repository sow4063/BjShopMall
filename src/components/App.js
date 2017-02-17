import React from 'react';

import Home from './Home';
import { Router, Route, browserHistory } from 'react-router';
import Facebook from './Facebook';
import Welcome from './Welcome';

import BuyerLogin from './BuyerLogin';
import SellerLogin from './SellerLogin';
import Join from './Join';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';
import KaKao from './kakao';

import ChatBox from './chatbox/ChatBox.js';


//socket

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect(process.env.SOCKET_URL);
			socket.on('connectMsg', msg => console.log(msg));

class App extends React.Component {

		constructor(props) {
			super(props);
		}

    render() {

        return (

          <div>
            <Addproducts></Addproducts>
            <ProductLists></ProductLists>
            <Billbox></Billbox>
            <h1>This is Bj Shop Mall</h1>
						<SocketProvider socket={socket}>
							<ChatBox user='chan'/>
						</SocketProvider>	 
          </div>

        	<Router history={browserHistory}>
        		<Route path="/" component={Home}></Route>
        		<Route path="/auth/facebook" component={Facebook}></Route>
        		<Route path="/welcome" component={Welcome}></Route>
        		<Route path="/sellerLogin" component={SellerLogin}></Route>
        		<Route path="/buyerLogin" component={BuyerLogin}></Route>
        		<Route path="/join" component={Join}></Route>
        	</Router>

        )
    }
}

export default App;



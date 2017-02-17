import React from 'react';
import ReactDOM from 'react-dom';



import { SocketProvider, socketConnect} from 'socket.io-react';
import io from 'socket.io-client';


//import injectTapEventPlugin from 'react-tap-event-plugin'; // Needed for onTouchTap
import App from './components/App';
import $ from 'jquery'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';



const socket = io.connect(process.env.SOCKET_URL);

socket.on('sMdessage', msg => console.log(msg));

//injectTapEventPlugin();

let rootElement = document.getElementById('root');
$("body").append($('<script src="https://code.jquery.com/jquery-1.12.4.min.js">'));
$("body").append($('<script src="https://service.iamport.kr/js/iamport.payment-1.1.4.js">'));



ReactDOM.render(
	<SocketProvider socket={socket}>
		<App/>
	</SocketProvider>	
	
	,rootElement );


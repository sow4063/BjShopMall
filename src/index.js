import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin'; // Needed for onTouchTap

import App from './components/App';

import Home from './components/Home';
import Facebook from './components/Facebook';
import Welcome from './components/Welcome';

import BuyerLogin from './components/BuyerLogin';
import SellerLogin from './components/SellerLogin';
import Join from './components/Join';

import BroadCastRoom from './components/BroadCastRoom';

import $ from 'jquery'


injectTapEventPlugin();

let rootElement = document.getElementById('root');
$("body").append($('<script src="https://code.jquery.com/jquery-1.12.4.min.js">'));
$("body").append($('<script src="https://service.iamport.kr/js/iamport.payment-1.1.4.js">'));




ReactDOM.render(

	<Router history={browserHistory}>

		<Route path="/" component={App}>
			<IndexRoute component = {Home} />
			<Route path="/auth/facebook" component={Facebook} />
			<Route path="/welcome" component={Welcome} />
			<Route path="/sellerLogin" component={SellerLogin} />
			<Route path="/buyerLogin" component={BuyerLogin} />
			<Route path="/join" component={Join} />
			<Route path="/broadcast/room" component={BroadCastRoom} />
		</Route>
		
	</Router>

, rootElement);








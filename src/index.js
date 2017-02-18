import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin'; // Needed for onTouchTap
import App from './components/App';

import $ from 'jquery'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import Intro from './components/intro/Intro';
import NotFound from './components/notfound/NotFound';



injectTapEventPlugin();

let rootElement = document.getElementById('root');
$("body").append($('<script src="https://code.jquery.com/jquery-1.12.4.min.js">'));
$("body").append($('<script src="https://service.iamport.kr/js/iamport.payment-1.1.4.js">'));


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component = {App}>
			<IndexRoute component = {Intro} />
			<Route path = "intro" component = {Intro} /> 
			<Route path = "*" component = {NotFound} /> 
		</Route>
	</Router>
, rootElement);




// 나머지 path를 제외한 모든 경로는 * path로 이동
// Route path= "*" component = {}







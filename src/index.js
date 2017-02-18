import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import $ from 'jquery';

let rootElement = document.getElementById('root');
$("body").append($('<script src="https://code.jquery.com/jquery-1.12.4.min.js">'));
$("body").append($('<script src="https://service.iamport.kr/js/iamport.payment-1.1.4.js">'));

ReactDOM.render(<App/>, rootElement);

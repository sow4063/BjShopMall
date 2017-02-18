import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Facebook from './Facebook';
import BuyerLogin from './BuyerLogin';
import SellerLogin from './SellerLogin';


export default class Home extends React.Component {
    render() {
        return (
        	<div>
            <h1>This is Bj Shop Mall!</h1>
            
            <p>
            	<Link to='/buyerLogin'><button>구매자 로그인</button></Link>
							<Link to='/sellerLogin'><button>판매자 로그인</button></Link>
						</p>
          </div>
        )
    }
}

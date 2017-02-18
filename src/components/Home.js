import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import Facebook from './Facebook';


export default class Home extends React.Component {
    render() {
        return (
        	<div>
            <h1>This is Bj Shop Mall!</h1>
            <Link to="/auth/facebook">facebook</Link>
          </div>
        )
    }
}

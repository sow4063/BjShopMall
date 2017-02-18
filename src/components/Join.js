import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

export default class Join extends React.Component {
	render() {
		return (
			<div>
				<h2>회원가입</h2>
				<p><a href="/auth/facebook">facebook</a></p>
				<form>
					<p><label htmlFor="id">ID</label>
						<input type="text"/>
					</p>
					<p><label htmlFor="password">PASSWORD</label>
						<input type="password"/>
					</p>
					<p><label htmlFor="email">E-MAIL</label>
						<input type="email"/>
					</p>
					<p>
						<input type="submit"/>
					</p>
				</form>
				 	

			</div>
		)
	}
}
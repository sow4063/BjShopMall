import React from 'react';
import { Link } from 'react-router';
import Join from './Join';

export default class SellerLogin extends React.Component {
	render() {
		return (
			<div>
				<h2>판매자 로그인창입니다.</h2>
				<p><a href="/auth/facebook">facebook</a></p>
				<form>
					<p>
						<input type="text" placeholder="ID를 입력하세요"/>
					</p>
					<p>
						<input type="password" placeholder="password를 입력하세요"/>
					</p>
					<p>
						<input type="submit"/>
					</p>
				</form>

				<p>
					아직도 회원이 아니세요? 회원가입하세요!
					<Link to="/broadcast/room">로그인</Link>
					<Link to="/join"><button>회원가입</button></Link>
				</p>
				 	

			</div>
		)
	}
}
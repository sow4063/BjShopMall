import React from 'react';
import { Router, Route, browserHistory } from 'react-router';


class App extends React.Component {

		constructor(props) {
			super(props);
		}

    render() {

        return (
        	<div>
        		{this.props.children}
        	</div>
        )
    }
}

export default App;


// 나머지 path를 제외한 모든 경로는 * path로 이동
// Route path= "*" component = {}



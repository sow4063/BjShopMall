import React from 'react';
<<<<<<< b65d6d3a38a28dfbfffdee0dbfef319a1795d7fd
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';
=======
import Home from './Home';
import { Router, Route, hashHistory } from 'react-router';
import Facebook from './Facebook';
import Welcome from './Welcome';
>>>>>>> bjshop

export default class App extends React.Component {
    render() {
        return (

          <div>
            <Addproducts></Addproducts>
            <ProductLists></ProductLists>
            <Billbox></Billbox>
          </div>

        	<Router history={hashHistory}>
        		<Route path="/" component={Home}></Route>
        		<Route path="/auth/facebook" component={Facebook}></Route>
        		<Route path="/welcome" component={Welcome}></Route>
        	</Router>
        	
        )
    }
}

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Addproducts from './Addproducts';
import ProductLists from './ProductLists';
import Billbox from './billbox';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <Addproducts></Addproducts>
            <ProductLists></ProductLists>
            <Billbox></Billbox>
          </div>
        )
    }
}

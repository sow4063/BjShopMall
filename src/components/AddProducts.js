import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {grey900} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: grey900,
  },
});

class Addproducts extends Component {
 
  render() {
    const standardActions = (
      <FlatButton/>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            title="Super Secret Password"
            actions={standardActions} >

          </Dialog>
          <h1>아프리카 Cart</h1>
          <h3>실시간 방송으로 제품을 판매해보세요</h3>
          <RaisedButton
            label="제품 판매하러 가기"
            secondary={true}
          />
        </div>
      </MuiThemeProvider>

    );
  }
}

export default Addproducts;

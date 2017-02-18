import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {orange500, amber800} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: amber800,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: amber800,
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500, amber800

  },
});

class Addproducts extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Card>
        <CardHeader
          title="상품 추가 하기 "
          subtitle="판매 하실 상품을 추가해 보세요"
          actAsExpander={true}
          showExpandableButton={true}
          style={{textAlign: 'center'}}
        />
        <CardActions>
        <CardText expandable={true}>
          <TextField
            hintText="ex)내가 만드는 수제 쨈"
            floatingLabelText="판매 상품"
            floatingLabelFixed={true}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          /> 
          <TextField
            hintText="ex)18,000원"
            floatingLabelText="판매 가격"
            floatingLabelFixed={true}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
        </CardText>
          <FlatButton 
            backgroundColor="#F57C00"
            hoverColor="#F57C00"
            label="상품 추가하기" />
        </CardActions>
      </Card>
       </MuiThemeProvider>
    );
  }
}

export default Addproducts;

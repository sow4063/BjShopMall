import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import Kakao from './kakao';
import kakaopay from './kakaopay';
import ProductLists from './ProductLists';

const styles = {

};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: grey900,
  },
});

export default class Billbox extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Card>
        <CardHeader
          title="결제하기"
          subtitle="결제 전 결제금액을 다시 한 번 확인해 주세요"
          actAsExpander={true}
          showExpandableButton={true}
          style={{textAlign: 'center'}}
        />
        <CardActions>
            <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
          <Kakao kakaopay={kakaopay}></Kakao>
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
       </MuiThemeProvider>
    );
  }
}

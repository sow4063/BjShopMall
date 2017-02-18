import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Kakao extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <FlatButton 
          backgroundColor="#FFC107"
          hoverColor="#FFC107" 
          label="카카오페이로 결제하기" 
          onClick={this.props.kakaopay}
        />
      </div>
      </MuiThemeProvider>
    );    
  }
}

export default Kakao;

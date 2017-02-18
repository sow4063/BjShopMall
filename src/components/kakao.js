import React from 'react';
import Button from 'muicss/lib/react/button';

class Kakao extends React.Component {
  render() {
    let style = {backgroundColor:'#fdd835'};
    return (
      <div>
        <Button variant='raised' style={style} onClick={this.props.kakaopay}>KAKAO PAY###</Button>
      </div>
    );    
  }
}

export default Kakao;
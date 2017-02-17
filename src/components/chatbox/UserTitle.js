import React from 'react';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

//mui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange300,
  },
});

const listItemStyle = {
  textAlign : 'right'
}

const avatarStyle = {
  margin: 5
};

 


const AvatarExampleSimple = (props) => {

  if(props.isMyMsg){ // 내 매세지인 경우 오른쪽에 표시

    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <List>

          <ListItem
            disabled={true}
            rightAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={avatarStyle}

              >
                {props.conversation.user.substring(0,1)}
              </Avatar>
            }
            style={listItemStyle}
          >
            {props.conversation.user} : {props.conversation.message}
          </ListItem>
        


        </List>
      </MuiThemeProvider>
    )

  }else{ // 내 메세지가 아닌경우 왼쪽에 표시

    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <List>

          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar
                color={deepOrange300}
                backgroundColor={purple500}
                size={30}
                style={avatarStyle}
              >
                {props.conversation.user.substring(0,1)}
              </Avatar>
            }
          >
            {props.conversation.user} : {props.conversation.message}
          </ListItem>
        


        </List>
      </MuiThemeProvider>
    )
  }
  
};

export default AvatarExampleSimple;



// <ListItem
//   disabled={true}
//   leftAvatar={
//     <Avatar
//     >A</Avatar>
//   }
// >
//   Letter Avatar
// </ListItem>


// <ListItem
//   disabled={true}
//   leftAvatar={
//     <Avatar
//       color={deepOrange300}
//       backgroundColor={purple500}
//       size={30}
//       style={style}
//     >
//       A
//     </Avatar>
//   }
// >
//   Letter Avatar with custom colors and size
// </ListItem>


// <ListItem
//   disabled={true}
//   leftAvatar={
//     <Avatar src="images/uxceo-128.jpg" />
//   }
// >
//   Image Avatar
// </ListItem>
// <ListItem
//   disabled={true}
//   leftAvatar={
//     <Avatar
//       src="images/uxceo-128.jpg"
//       size={30}
//       style={style}
//     />
//   }
// >
//   Image Avatar with custom size
// </ListItem>



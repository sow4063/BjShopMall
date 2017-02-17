import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey900} from 'material-ui/styles/colors';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

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

const tableData = [
  {
    products: '내가 만드는 수제 쨈',
    price: '₩18,000원',
    selected: false,
  },
  {
    products: '고급스럽게 명품 스타일',
    price: '₩18,000원',
  },
  {
    products: '반트 수분가득SET 무려70%SALE',
    price: '₩18,000원',
    selected: false,
  },
  {
    products: '날이 좋아서 봄신상 최대 80%SALE',
    price: '₩18,000원',
  },
  {
    products: '쫀쫀 밀착커버 실리퍼프60%',
    price: '₩18,000원',
  },
  {
    products: '놓치지 마세요 14K 블링팔찌',
    price: '₩18,000원',
  },
  {
    products: 'Adam Moore',
    price: '₩18,000원',
  },
];

export default class ProductLists extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.products]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                장바구니
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The products">products</TableHeaderColumn>
              <TableHeaderColumn tooltip="The price">price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.products}</TableRowColumn>
                <TableRowColumn>{row.price}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        
      </div>
       </MuiThemeProvider>
    );
  }
}

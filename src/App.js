import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown,Table} from 'react-bootstrap';
import Select from 'react-select';

import NameComponent from './components/NameComponent.js';

class App extends Component {
  constructor(props){
    super(props);
    console.log("Constructor Called")
    this.state ={
      array : ['React','is ','Awesome','to learn'],
      username : 'Sam',
      selectedOption: '',
      jsonList: []
    };
  }
 
  componentDidMount(){
      console.log('Did Mount called for comp');

      fetch('http://www.json-generator.com/api/json/get/bVDxTQSDQO?indent=2',{
        method:'GET'
      })
      .then(response=> response.json())
      .then(json => {
        console.log(json);
        this.setState({
          jsonList: json
        })
      })
      .catch(error => console.log(error));
  }
  componentWillMount() {
    console.log('Will Mount called comp');
  }
 
 
  handleChange(selectedOption) {
    console.log(selectedOption);
    this.setState({ selectedOption: selectedOption ? selectedOption : '' });
    // console.log(`Option selected:`, selectedOption);
  }
     
  render() {
    console.log('render');
    var word='Hello';
    // const array = ['welcome','to','my','place'];
    // array1.push('FOLKS');
    const {array,jsonList }= this.state;
    const selectList = jsonList.map((json) => {
      return {
        value: json.name,
        label: json.name,
      }
    })
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NameComponent/>
        </header>
        
            <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>;

      <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <h1>Swayam's Data and fetch API POC</h1>
                <p>Here we'll list some data from some smokin sources</p>
                <div className='row'>
                  <div className='col-sm-3'>
                        <Select
                        name='form-field-name'
                        value={this.state.selectedOption}
                        onChange={this.handleChange.bind(this)}
                        options={selectList}
                      />
                   </div>
                  </div>
              <hr/>
                  <div className='row'>
                      <div className='col-sm-9'>
                        <Table striped bordered condensed hover>
                          <thead>
                            <tr>
                              <th>Names</th>
                              <th>Address</th>
                              <th>Age</th>
                              <th>Bank Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                          { jsonList.map( item => {
                            console.log('Selected Option:',this.state.selectedOption)
                            if(this.state.selectedOption ===''||item.name === this.state.selectedOption.value) {                              
                              return(
                                      <tr>
                                        <td>{item.name }</td>
                                        <td>{item.address }</td>
                                        <td>{item.age }</td>
                                        <td>{item.balance }</td>
                                      </tr>
                              )
                            }                         
                        })
                        }
                                              
                          </tbody>
                        </Table>;
                  </div>
            </div>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

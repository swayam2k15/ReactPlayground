import React, { Component } from 'react';



class NameComponent extends Component {
 
  componentDidMount(){
      console.log('Did Mount called for NAmecomp');
      // this.setState({
      //   name_displayed: 'Modified Name'
      // })
  }
  componentWillMount() {
    console.log('Will Mount called Namecomp');
    
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(this.props.username!== nextProps.username) {
      if(nextProps.username.indexOf(' ')>-1) {
        this.setState({
          name_displayed:'Full name'
        })
      }
      else {
        this.setState({
          name_displayed:'First name'
        })
      }
    }

  }
  constructor(props) {
    super(props);
    console.log("Constructor Called for NameComp");
    this.state = {
      name_displayed : 'First Name'
    }
  }
     
  render() {
    console.log('render Namecomp');
    const {username} =this.props;

    const {name_displayed} =  this.state;
    return (
      <div className="App">    
        <p>{name_displayed}--> from state</p>    
        <p className="App-intro">
         ReactChild Component !!! (From NameComponent) {username ? username :'No user here' } ->from props
        </p>
      </div>
    );
  }
}

export default NameComponent;

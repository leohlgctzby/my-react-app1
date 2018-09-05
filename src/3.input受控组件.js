import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Input extends Component{
  constructor(){
    super();
    this.state = {val : ''}
  }

  handleChange = (event)=>{
    // console("aaaaaa");
    let val = event.target.value;
    this.setState({val})
  }

  render(){
    return (
      <div> 
        <p>{this.state.val}</p>
        <input type="text" value={this.state.val} onChange={this.handleChange}></input>
      </div>
    )
  }
}

ReactDOM.render(<Input/>,  document.getElementById('root'));


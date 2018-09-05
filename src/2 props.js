import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Xin extends Component{
  static defaultProps = {
    name : '无名'
  }
  static propTypes = {
    name : PropTypes.string ,
    age : PropTypes.number.isRequired
  }

  constructor(){
    super();
    this.state = {happy:true}
    
  }
  handleClick = () =>{
    this.setState({
      happy:!this.state.happy
    })
  }

  render(){
    let heart = this.state.happy?'开心':'难过';
    return <div>
      <p>心情：{heart}</p>
      <p>姓名：{this.props.age}</p>
      <button onClick = {this.handleClick}>变心</button>
    </div>
  }
}
  


ReactDOM.render(<Xin age={22} />,  document.getElementById('root'));


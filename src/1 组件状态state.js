import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Clk extends Component {
    constructor() {
      super();
      this.state = { time: new Date().toLocaleString() };
    }
  
    componentDidMount() {
      window.setInterval(() => {
        this.setState({ time: new Date().toLocaleString() });
      }, 1000);
    }
  
    render() {
      return (<h1>{this.state.time}</h1>);
    }
  }
  


ReactDOM.render(<Clk></Clk>,  document.getElementById('root'));


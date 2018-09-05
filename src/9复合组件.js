import React, { Component } from "react";
import ReactDOM from "react-dom";

class Panel extends Component{
  constructor(){
    super()
    this.state={color:'black'}
  }
  render(){
    return (
      <div>
        <button onClick={()=>{this.setState({color:'red'})}}>红</button>
        <button onClick={()=>{this.setState({color:'green'})}}>绿</button>
        <PanelHeader color={this.state.color} head={this.props.head}/>
        <PanelBody body={this.props.body}/>
        <PanelFooter foot={this.props.foot}/>
      </div>
    )
  }
}

class PanelHeader extends Component{
  render(){
    return (
      <div style={{background:this.props.color}}>{this.props.head}</div>
    )
  }
}
class PanelBody extends Component{
  render(){
    return (
      <div>{this.props.body}</div>
    )
  }
}
class PanelFooter extends Component{
  render(){
    return (
      <div>{this.props.foot}</div>
    )
  }
}

ReactDOM.render(<Panel head="头" body="体" foot="尾"/>, document.getElementById("root"));

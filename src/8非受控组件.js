import React, { Component } from "react";
import ReactDOM from "react-dom";

class Sum extends Component {
  handleChange = (event) => {
    let a = parseInt(this.a.value );
    let b = parseInt(this.b.value||0);
    this.result.value = a + b;
  };

  render() {
    return (
      <div onChange={this.handleChange}>
        <input ref={ref=>this.a=ref} type="text" />+
        <input ref={ref=>this.b=ref} type="text" />=
        <input ref={ref=>this.result=ref} type="text" />
      </div>
    );
  }
}

ReactDOM.render(<Sum />, document.getElementById("root"));

import React, { Component } from "react";
export default class Suggest extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading" >
                <input type="text" className="form-control"/>
               </div>
              <div className="panel-body" >
                <ul> </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
export default class UserDetail extends Component {
  render() {
    let id = this.props.match.params.id;
    let userStr = localStorage.getItem("users");
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find(aa => aa.id == id);

    // let citys = [{"id":1,"name":"beijing"},{"id":2,"name":"shanghai"}];
    // let city = citys.find(aa => aa.id === 1);
    //  console.log(typeof(id1));
    return (
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>姓名</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

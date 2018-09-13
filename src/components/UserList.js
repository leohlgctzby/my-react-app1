import React,{Component} from 'react';
import {Link} from 'react-router-dom'
export default class UserList extends Component{
  constructor(){
    super();

    this.state = {users:[]};
  }

  componentWillMount(){
    let userStr = localStorage.getItem("users");
    let users = userStr?JSON.parse(userStr):[];
    this.setState({users});
  }

    
   render(){
    //      let userStr = localStorage.getItem("users");
    // let users = userStr?JSON.parse(userStr):[];
       return (
          <ul className="list-group">
           { this.state.users.map( item =>
              (<li className="list-group-item" key={item.id}><Link to={"/user/detail/"+item.id}> {item.name}</Link></li>)
            )}
          </ul>
       )
   }
}
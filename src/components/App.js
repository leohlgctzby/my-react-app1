import React from "react";
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">用户管理系统</div>
          </div>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/home">首页</Link></li>
            <li className="nav-item"><Link to="/user">用户管理</Link></li>
            <li className="nav-item"><Link to="/profile">个人设置</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/profile" component={Profile} />
          
          </div>
        </div>
      </div>
    </div>
  </Router>
);

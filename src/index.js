import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

function Root(){
    return <h1>Root</h1>
}
function Home(){
    return <h1>home</h1>
}
function User(){
    return <h1>user</h1>
}
function Profile(){
    return <h1>profile</h1>
}

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component="Root"></Route>
            <Route path="/home" component="Home"></Route>
            <Route path="/user" component="User"></Route>
            <Route path="/profile" component="Profile"></Route>
        
        </div>
    </Router>
), document.getElementById("root"));


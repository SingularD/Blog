import React, { Component } from 'react';
import './App.css';
import Home from './container/Home'
import Article from './container/Article'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from './admin/Admin'
import Login from './admin/Login'



class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="Container">
          <Route path="/" exact component={Home}/>
          <Route path="/article/:title" component={Article}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;

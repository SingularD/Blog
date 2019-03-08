import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import PassageList from './components/PassageList'
import Tags from './components/Tags'
import CopyRight from './components/Copyright'
import Passage from './components/Passage'
import Comments from './components/Comments'
import CommentList from './components/CommentList'
import Home from './container/Home'
import Article from './container/Article'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '11',
      email: '',
      url: '',
      content: ''
    }
    this.getInputValue = this.getInputValue.bind(this)
  }
  getInputValue = (name, email, url, content) => {
    console.log(name)
    this.setState({name: name})
    console.log(this.state.name);
    // this.setState({email: email})
    // this.setState({url: url})
    // this.setState({content: content})

    console.log(name)
  }

  render() {
    return (
      <Router>
        <div className="Container">
          <Route path="/" exact component={Home}/>
          <Route path="/article" exact component={Article}/>
        </div>
      </Router>
    );
  }
}

export default App;

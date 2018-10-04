import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Video from './Video'
import Gif from './Gif'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/:bucket/show_all_videos" component={Videos}/>
          <Route exact path="/:bucket/show_all_gifs" component={GIF}/>
        </div>
      </Router>
    );
  }
}

export default App;
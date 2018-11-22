import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Post from './component/Post';
// import Test1 from './component/test1';
import  PostForm  from './component/PostForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Post /> */}
        {/* <Test1 /> */}
        <PostForm />
      </div>
    );
  }
}

export default App;

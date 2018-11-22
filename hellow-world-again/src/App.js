import React, { Component } from 'react';
import './App.css';
import HelloWorld from './reactjsTut/helloWorld'
import IntroducingJSX from './reactjsTut/introducingJSX'
import RenderingElements from './reactjsTut/RenderingElements'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world from App</h1>
        <HelloWorld />
        <IntroducingJSX />
        <RenderingElements />
      </div>
    );
  }
}

export default App;

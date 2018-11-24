import React, { Component } from 'react';
import './App.css';
import HelloWorld from './reactjsTut/helloWorld'
import IntroducingJSX from './reactjsTut/introducingJSX'
import RenderingElements from './reactjsTut/RenderingElements'
import StateLifeCycle from './reactjsTut/StateLifeCycle'
import HandlingEvents from './reactjsTut/HandlingEvents'
import ConditionalRendering from './reactjsTut/ConditionalRendering'
import ListsKeys from './reactjsTut/ListsKeys'
import Forms from './reactjsTut/Forms'
import Father from './reactjsTut/Father';
import LiftStateUp from './reactjsTut/LiftStateUp'
class App extends Component {
  

  render() {
    return (
      <div className="App">
        <h1>hello world from App</h1>
        <HelloWorld />
        <IntroducingJSX />
        <RenderingElements />
        <StateLifeCycle />
        <HandlingEvents />
        <ConditionalRendering />
        <ListsKeys />
        <Father />
      </div>
    );
  }
}

export default App;

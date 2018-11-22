import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class RenderingElements extends Component {
    componentWillUnmount(){
        setInterval(this.ticktock, 1000);

    }
    render() {

    return this.ticktock()
  }

  ticktock(){
    let childnode = document.createElement("div")
    this.append(childnode)
    const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      return ReactDOM.render(element, childnode);
    
    }
  append(node){
    document.getElementById("hi").appendChild(node)
  }


}

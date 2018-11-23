import ReactDOM from 'react-dom'
import React, { Component } from 'react'





export default class helloWorld extends Component {
  render() {
   return this.renderFromRoot()
  }
  renderFromRoot(){
    let childNode=  document.createElement("p")
    this.append(childNode)
    return ReactDOM.render(
     <div> ------------------------------------------------------
        <p>01 hello world from another root named "hi"</p></div>,
        childNode
    )
  }
   append(childNode) {
    document.getElementById("hi").appendChild(childNode)
      
  }
}

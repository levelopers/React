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
        <p>hello world from another root named "hi"</p>,
        childNode
    )
  }
   append(childNode) {
    document.getElementById("hi").appendChild(childNode)
      
  }
}

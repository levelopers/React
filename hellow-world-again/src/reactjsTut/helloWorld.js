import ReactDOM from 'react-dom'
import React, { Component } from 'react'





export default class helloWorld extends Component {
  render() {
   return this.renderFromRoot()
  }
  renderFromRoot=()=>{
    return <div>
      <p>01 render from root</p>
    </div>
  }
  
}

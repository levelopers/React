import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class RenderingElements extends Component {

  render() {

    return this.renderComponent()
  }

  renderComponent() {
    let childnode = document.createElement("div")
    this.append(childnode)
    const element = (<div>
      <this.RenderManyTimes name="sara" />
      <Avatar1 />
      <Avatar2 />
    </div>)
    return ReactDOM.render(element, childnode);

  }
  append(node) {
    document.getElementById("hi").appendChild(node)
  }

  //this.function jsx tag works
   RenderManyTimes() {
    return <div>
      -------------------------------------------
      <p>   03-01 composing component</p>
      <Welcome name="bob" />
      <Welcome name="bob" />
      <Welcome name="bob" />
    </div>
  }


}

function Welcome(props) {
  return <div>
    <p>04 Hello, {props.name} implement jsx tag by function</p>
  </div>
}

//generic jsx block
function Avatar(props) {
  return (
    <div>
      <p>04 {props.user.name}</p>
    </div>
  );
}
function Avatar1() {
  let author = {
    'name':'author bob'
  }
  return <div>
    04-02 extracting components
    <Avatar user={author} />

  </div>
}
function Avatar2(){
  let publisher={
    name:'publisher bob'
  }
  return <div>
    <Avatar user={publisher} />
  </div>
}
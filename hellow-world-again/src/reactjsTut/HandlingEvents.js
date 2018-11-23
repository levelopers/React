/*
1.use event.preventDefault
2.functions in React classes are not bind automatically(have to bind in constructor)
    or use arrow function to refer this
3.use constructor has to use super(props)

???????????????????
https://reactjs.org/docs/handling-events.html
*/


import React, { Component } from 'react'

export default class HandlingEvents extends Component {
    // constructor(props){
    //     super(props)

    //     this.click = this.click.bind(this)
    // }
    click = (e,id)=>{
        // console.log(id);
        console.log(e);
        
    alert("click works")        
    }
  render() {
      
    return (
      <div>
        <button  onClick={e=>this.click(e)}>button</button>
      </div>
    )
  }
}

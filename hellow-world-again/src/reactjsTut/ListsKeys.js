/*
1.use "key" attr for list in  react for identifying update
2.add "key" attr when populate array(avoid redundant)
*/

import React, { Component } from 'react'

export default class ListsKeys extends Component {
    List = (props)=>{
        const nums  = props.numbers
        const listItems = nums.map((number)=>(
            <li key={number.toString()}>
            {number*2}
            </li>
        ))
        return <ul>
            {listItems}
        </ul>
    }
  render() {
      let arr = [1,2,3,4,5]
    return (
      <div>
          ----------------------------------------------------------------------
          <p>08</p>
        <this.List numbers={arr}/>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Forms extends Component {
  constructor(props){
    super(props)
    
  }
  
  
  render() {
    return (
      <div>
        <button onClick={(e)=>this.props.triggerFather('dataFromChild')}>transUp</button>
      </div>
    )
  }
}


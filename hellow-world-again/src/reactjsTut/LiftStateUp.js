import React, { Component } from 'react'

export default class LiftStateUp extends Component {
    constructor(props){
        super(props)

    }
  render() {
    return (
      <div>
          <p>---------------------------</p>
          <p>10</p>
        {this.props.data}
      </div>
    )
  }
}

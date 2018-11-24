import React, { Component } from 'react'

export default class Compostion extends Component {
    constructor(props){
        super(props)
    }
    Fancy=(props)=>{
        return (
            <div>
                <p>wrap up</p>
                {props.children}
                <p>wrap down</p>
            </div>
        )
    }
    FancyFather=(props)=>{
        return <div>
            <this.Fancy>
                {props.color}
            <p>fancy child</p>
            </this.Fancy>
        </div>
    }

  render() {
    return (
      <div>
          <p>-------------------------------------------------------</p>
          <p>11</p>
        <this.FancyFather color="blue">
        </this.FancyFather>

      </div>
    )
  }
}

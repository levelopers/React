import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class introducingJSX extends Component {
    render() {
        return this.embedingExpressionsInJSX()
    }
    embedingExpressionsInJSX() {
       
        const name = "Josh Perez"

        const user = {
            firstName:"Harper",
            lastName:"Perez"
        }
        
        return this.getGreeting(user)
    }
    
    getGreeting(user){
        if(user){
            return <div> 
                ----------------------------------------------
            <p>02 hello, {user.firstName} {user.lastName}</p>
            </div>
        }
        return <h1>hello, but i don't know you</h1>
    }
}

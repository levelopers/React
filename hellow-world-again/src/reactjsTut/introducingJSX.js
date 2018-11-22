import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class introducingJSX extends Component {
    render() {
        return this.embedingExpressionsInJSX()
    }
    embedingExpressionsInJSX() {
        let childNode = document.createElement("p")
        this.append(childNode)
        const name = "Josh Perez"

        const user = {
            firstName:"Harper",
            lastName:"Perez"
        }
        
        return ReactDOM.render(
            this.getGreeting(user),
            childNode
        )
    }
    append(node) {
        document.getElementById("hi").appendChild(node)
    }
    getGreeting(user){
        if(user){
            return <div> 
            <h1>hello, {user.firstName} {user.lastName}</h1>
            </div>
        }
        return <h1>hello, but i don't know you</h1>
    }
}

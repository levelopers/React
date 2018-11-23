import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: String,
            islogin: false
        }
        this.Greeting = this.Greeting.bind(this)
        this.User = this.User.bind(this)
        this.Singup = this.Singup.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.Input = this.Input.bind(this)

    }
    handleClick(e) {
        this.setState({
            islogin: true,
        })
    }
    Input(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);

    }
    //conditional & composition
    Greeting(props) {
        if (props.login) {
            return <this.User name={props.name} />
        }
        return <this.Singup />
    }
    User(props) {
        return <div>
            <p>hi,{props.name}</p>
        </div>
    }
    Singup() {
        return <div>
            <p>you have to sign up</p>
        </div>
    }
    render() {
        return (
            <div>
                ------------------------------------------------------------------------------
                <p>07</p>
                <label >name:</label>
                <input name="name" type="text" onChange={this.Input}></input>
                <button onClick={this.handleClick}>submit</button>

                <this.Greeting login={this.state.islogin} name={this.state.name} />
            </div>
        )
    }
}



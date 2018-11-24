import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: String,
            islogin: false,
            isHide:false
        }
        this.Greeting = this.Greeting.bind(this)
        this.User = this.User.bind(this)
        this.Singup = this.Singup.bind(this)
        this.Input = this.Input.bind(this)
        this.LogOutBtn = this.LogOutBtn.bind(this)
        this.LogInBtn = this.LogInBtn.bind(this)

    }
   
    //01 
    Input(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);

    }
    //02 conditional & composition
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
    //03
    LogOutBtn(){
        
        return <div>
            <button onClick={this.handleLogOut}>log out</button>
        </div>
    }
    LogInBtn(){
        const isHide = this.state.isHide
        if(isHide){
            return null
        }
        return <div>
            <br/>
            <button style={{width: 100}}  onClick={this.handleLogIn}>log in</button>
        </div>
    }
    handleLogIn=()=>{
        this.setState({
            islogin:true
        })
    }
    handleLogOut=()=>{
        this.setState({
            islogin:false
        })
    }
    render() {
        const islogin = this.state.islogin
        let btn 
        if(islogin){
            btn = <this.LogOutBtn />
        }else{
            btn = <this.LogInBtn />

        }
        return (
            <div>
                ------------------------------------------------------------------------------
                <p>07</p>
                
            {/* ternary "inline" */}
                {islogin? (<p></p>)
                : (<div>
                <label >name:</label>
                <input name="name" type="text" onChange={this.Input}></input> 
                </div>
                )}
                {btn}
                <this.Greeting login={this.state.islogin} name={this.state.name} />
            </div>
        )
    }
}



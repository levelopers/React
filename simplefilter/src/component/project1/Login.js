import React, { Component } from 'react'
import Form from './Form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './SignUp';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: {
                value: '',
                isValid: false,
                errorMessage: ''
            },
           
            password: {
                value: '',
                isValid: false,
                errorMessage: ''
            }
        }

    }
    handleChange = (e) => {
        const targetName = e.target.name
        const targetValue = e.target.value

        this.setState({
            [targetName]: {
                ...this.state[targetName],
                value: targetValue
            }
        })
    }

    validate = (targetName, targetValue) => {
        let isValid = false
        let errorMessage = ''


        switch (targetName) {
            case 'email':
                isValid = targetValue.match(/[\w-]+@([\w-]+\.)+[\w-]+/i)
                isValid = isValid ? true : false
                errorMessage = isValid ? '' : 'invalid email'
                break;

            case 'password':
                isValid = targetValue.match(/(?=.*[a-z])(?=.*[A-Z])(?=.{6,15})/g)
                isValid = isValid ? true : false
                errorMessage = isValid ? '' : 'Longer than 6 '
                
                // errorMessage = isValid ? '' : 'password has to be 6-15 letter or number with At least one upper case character and At least one lower case character '
        }

        if (!targetValue) {
            errorMessage = "Required"
        }
        this.setState({
            [targetName]: {
                ...this.state[targetName],
                isValid: isValid,
                errorMessage: errorMessage
            }
        })
    }

    

    handleBlur = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.validate(name, value)
    }

   


    render() {
        console.log(this.state);
        return (
    
    <div className="login" style={{"background-image": "url('/background.jpg')"}}>


                <div className="out-box">
                

                    <div id="form-title">
                        BIGFISH
                        </div>

                    <form onSubmit={this.handleSubmit}>
                        <Form name="email" message={this.state.email.errorMessage} 
                        handleChange={(e)=>this.handleChange(e)} handleBlur={(e)=>this.handleBlur(e)} value={this.state.email.value}/>
                        <Form name="password" message={this.state.password.errorMessage}
                        handleChange={(e)=>this.handleChange(e)} handleBlur={(e)=>this.handleBlur(e)} value={this.state.password.value}/>
                       
                        

                        <button id="form-button" type="submit" >
                            Login
                            </button>
                    </form>
                    <div className="footer">
                       <span >
                      Don't have an account?
                      {/* <Router>
                       <Link to="/SignUp">SignUp</Link>
        <Route path="/Signup" component={this.SignUp} />
                       </Router> */}
                       </span>
                    </div>
                </div>


            </div>
        )
    }
}

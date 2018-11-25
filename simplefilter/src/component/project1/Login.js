import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
                email:{},
                name:{},
                password:{}
        }

    }

    handleBlur = (e) => {
        const text = e.target.value
        let receipt={
            message:'',
            isPassed:false
        }
        if(e.target.name==="email"){
            receipt.message=this.checkEmail(text).message
            receipt.isPassed=this.checkEmail(text).isPassed
            if(!receipt.isPassed){
                // console.log(receipt.message);
                
            }
        }        
        if(e.target.name==="name"){
             receipt.message=this.checkName(text).message
             receipt.isPassed=this.checkName(text).isPassed
            if(!receipt.isPassed){
                console.log(receipt.message);
                
            }

        }
        if(e.target.name==="password"){
            receipt.message=this.checkPassword(text).message
             receipt.isPassed=this.checkPassword(text).isPassed
            if(!receipt.isPassed){
                console.log(receipt.message);
                
            }
        }

        this.setState({
            [e.target.name]:{
                message:this.receipt.message,
                isPassed:this.receipt.isPassed
            }
            })
        
    }
    checkEmail = (email) => {
        let emailReceipt = {
            isPassed: false,
            message: ''
        }
        if (email) {
            if (email.length < 25 && email.length > 5) {
                if (email.indexOf('@') !== -1&&email.indexOf('.com')!==-1) {
                    emailReceipt.isPassed = true
                    emailReceipt.message = 'passed'
                    return emailReceipt
                }
                emailReceipt.message = "not valid email format"
                return emailReceipt
            }
            emailReceipt.message = "Longer than 5"
            return emailReceipt
        }
        emailReceipt.message = 'Required'
        return emailReceipt

    }
    checkName=(name)=>{
        let receipt = {
            isPassed: false,
            message: ''
        }
        if (name) {
            receipt.isPassed=true 
            receipt.message='passed'
            return receipt
        }
        receipt.message = 'Required'
        return receipt
    }
    checkPassword=(password)=>{
        let receipt = {
            isPassed: false,
            message: ''
        }
        if (password) {
            if (password.length < 15 && password.length > 6) {
                if (password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})")) {
                    receipt.isPassed = true
                    receipt.message = 'passed'
                    return receipt
                }
                receipt.message = `not valid password format \n 
                password have to include at least one lowercase, one uppercase letter,one special letter and one number \n
                good luck! `
                return receipt
            }
            receipt.message = "Longer than 6"
            return receipt
        }
        receipt.message = 'Required'
        return receipt
    }
    
    render() {
        console.log(this.state);
        
        return (
            <div>
                <div className="out-box">
                    <div className="card">

                        <form onSubmit={this.handleSubmit}>
                            <input onBlur={this.handleBlur} type="text" name="email" placeholder={"email"} />
                            <input onBlur={this.handleBlur} type="text" name="password" placeholder="password" />
                            <input onBlur={this.handleBlur} type="text" name="name" placeholder="name" />
                            <input type="button" value="button" />
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

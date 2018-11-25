/*
1.An input form element whose value is controlled by React in this way is called a “controlled component”.
    react state.value override(control) form input value
*/


import React, { Component } from 'react'
import Forms from './Forms'
import LiftStateUp from './LiftStateUp'
import Compostion from './Compostion'

export default class Father extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            value:'',
            txt:'',
            selectValue:'pen'
        }
    }
    //08
    extract = (data) => {
        this.setState({
            data: data
        })
    }
    //09
    handleChange=(e)=>{
        this.setState({
            value:e.target.value.toUpperCase()
        })
    }
    handleSubmit=(e)=>{
        alert(`you submit: ${this.state.value}`)
        e.preventDefault()

    }
    updateTextArea=(e)=>{
        this.setState({
            txt:e.target.value.toUpperCase()
        })
        e.preventDefault()

    }
    handleSubmit1=(e)=>{
        alert(`you submit : ${this.state.selectValue}`)
        e.preventDefault()
        
    }
    selectChange=(e)=>{
        this.setState({
            selectValue:e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>----------------------------------------------------------</p>
                <p>09-01</p>
                <p>{this.state.data}</p>
                <Forms triggerFather={(data) => this.extract(data)} />
                <p>09-02</p>
                <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit"/>
                <textarea value={this.state.txt} onChange={this.updateTextArea}></textarea>
                </form>
                <p>09-03</p>
                <form onSubmit={this.handleSubmit1}>
                <label >
                    pick one 
                    <select value={this.state.selectValue} onChange={this.selectChange}>
                    <option value={["apple","anotherapple"]}>apple</option>
                    <option value="pineapple">pineapple</option>
                    <option value="pen">pen</option>
                    </select>
                    <input type="submit"/>
                </label>
                </form>
                
                <LiftStateUp data={this.state.data} />
                <Compostion />
            </div>
        )
    }
}

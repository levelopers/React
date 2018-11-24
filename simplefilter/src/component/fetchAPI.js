import React, { Component } from 'react'

export default class fetchAPI extends Component {
    componentDidMount() {
        fetch("https://www.hatchways.io/api/assessment/students")
            .then(res => res.json())
            .then(response => {
                this.props.requireData(response.students)
            }).catch(e => console.log(e))

    }
    render() {
       
        return (
            <div >
                
            </div>
        )
    }
}

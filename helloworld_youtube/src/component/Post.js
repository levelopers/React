import React, { Component } from 'react'

export default class Post extends Component {
    
    constructor(props){
        super(props)
        this.state={
            post:[]
        }
    }
    componentWillMount(){
        // console.log(11);
        fetch('https://www.hatchways.io/api/assessment/students')
        .then(res=> res.json())
        .then(data=> {
            // console.log(data);
            this.setState({post:data.students})
            console.log(this.state);
            

            
        })
        
    }
  render() {
      const postItem = this.state.post.map(e => (
          <div key={e.id}>
        <p>{e.fistName}</p>
        <p>{e.lastName}</p>
        <p>{e.city}</p>
        </div>

      ));
    return (
      <div>
      
        post request
        {postItem}
      </div>
    )
  }
}


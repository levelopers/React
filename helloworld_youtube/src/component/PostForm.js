import React, { Component } from 'react'

class PostForm extends Component {
constructor(props){
super(props)
this.state={
  name:String,
  value:String
}
this.onChange=this.onChange.bind(this)
this.onSubmit=this.onSubmit.bind(this)
this.onClick=this.onClick.bind(this)


}
onChange(e){
  this.setState({[e.target.name]:e.target.value})
  console.log(this.state);
  
}
onSubmit(e){
  console.log(e);
  
}
onClick(e){
  console.log(e);
  
}

  render() {
    return (
      <div>
        <h1>Post form</h1>
        <form >
          <label>name:</label>
          <hr/>
          <input name="name" type="text" onChange={this.onChange} value={this.state.name}/>
          <label >city:</label>
          <input name="city" type="text" onChange={this.onChange} value={this.state.city}/>
          <hr/>
          <button  type="submit">submit</button>
          </form>
          <button onClick={this.onClick} type="button">submit</button>

      </div>
    )
  }
}

export default PostForm

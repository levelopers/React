import React, { Component } from 'react';
import './App.css';
// import FetchAPI from './component/fetchAPI'
import SignUp from './component/project1/SignUp.js'
import Login from './component/project1/Login'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     fetchData: []
  //   }
  // }
  // handleData = (data) => {
  //   console.log(data);

  //   this.setState({
  //     fetchData: data
  //   })
  // }

  // Fetch = () => {
  //   const dataState = this.state.fetchData
  //   //setstate in  render
  //   return (
  //     <div className="App">
  //       <FetchAPI requireData={data => this.handleData(data)} />
  //       <button className="btn btn-danger">test button</button>
  //       <div >
  //         {dataState ?
  //           (dataState.map(stu =>
  //             <div className="card" key={stu.id}>
  //               <p>{stu.firstName} {stu.lastName}</p>
  //             </div>
  //           ))
  //           : (
  //             <div>
  //               fail
  //                     </div>
  //           )}
  //       </div>
  //     </div>
  //   )
  // }

  //password validate seperate
  //error message (white background color)
  //router --> component dupalicate
  //          route component variable
  //new repo, project structure 
  



  Home = () => {
    return (
      <div>
        <h1>home</h1>
      </div>
    )
  }
  Products = () => {
    return (
      <div>
        prode
      </div>
    )
  }

  render() {
    return (
      // <div>
      //   asdadas

      //   asda
      //   da
      //   sda

        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/signup" component={SignUp} /> */}
          </Switch>
        </Router>
      // </div>

    )
  }
}




export default App;

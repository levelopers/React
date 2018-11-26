import React, { Component } from 'react';
import './App.css';
import FetchAPI from './component/fetchAPI'
<<<<<<< HEAD
import Login from './component/project1/Login'
=======
import Game from './component/tictoc/Game'
>>>>>>> laptop

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchData: []
    }
  }
  handleData = (data) => {
    console.log(data);
<<<<<<< HEAD

    this.setState({
      fetchData: data
    })
  }

=======

    this.setState({
      fetchData: data
    })
  }

>>>>>>> laptop
  Fetch = () => {
    const dataState = this.state.fetchData
    //setstate in  render
    return (
<<<<<<< HEAD
      <div className="App">
        <FetchAPI requireData={data => this.handleData(data)} />
        <button className="btn btn-danger">test button</button>
        <div >
          {dataState ?
            (dataState.map(stu =>
              <div className="card" key={stu.id}>
                <p>{stu.firstName} {stu.lastName}</p>
              </div>
            ))
            : (
              <div>
                fail
                      </div>
            )}
        </div>
=======
      <div className="Fetch">
      <FetchAPI requireData={data => this.handleData(data)} />
      <button className="btn btn-danger">test button</button>
      <div >
        {dataState ?
          (dataState.map(stu =>
            <div className="card" key={stu.id}>
              <p>{stu.firstName} {stu.lastName}</p>
            </div>
          ))
          : (
            <div>
              fail
                        </div>
          )}
      </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
      {/* <this.Fetch /> */}
      <Game />
>>>>>>> laptop
      </div>
    )
  }


render() {
  return (
    <div>
      {/* <this.Fetch /> */}
      <Login />

    </div>
  )
}
}



export default App;

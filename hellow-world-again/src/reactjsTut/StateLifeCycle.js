/*
1.use setState to modify state
2.setState callback 
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
3.state is object and its attributes can be merged(setState) seperately
4.state is private 
5.state data flow down (data pass from parent to childrenS)

*/



import React, { Component } from 'react'

export default class StateLifeCycle extends Component {
    //(1)pass class to ReactDOM.render
    //(2)call class constructor
    constructor(props) {
        super(props);

        //(3)initialize state
        this.state = { date: new Date() };
    }
    //(5) after DOM inserted schedule UI to update time
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //(7) state not gonna be changed call will mount
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //(6) change state, then component's render automatically aware updates
        this.setState({
            date: new Date()
        });
    }
    //(4) update dom with state
    render() {
        // console.log(this.state.date);
a()
        return (
            <div>
                ------------------------------------------------------------------------------------
              <p>05 It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }


}

function a () {

}
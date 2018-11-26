import React, { Component } from 'react'


export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            isXnext: true
        }
    }
    handleClick = (i) => {
        //immutable 
        const squares = this.state.squares
        //set value
        squares[i] = this.state.isXnext ? 'x' : 'o'
        console.log(squares);

        this.setState({
            squares: squares,
            isXnext: !this.state.isXnext
        })

    }

    Square = (i) => {
        return (
            <div>
                {/* pass handleclick and value up */}
                <button style={{ height: "50px", width: "50px" }} 
                className="btn btn-success" 
                onClick={() => this.handleClick(i)}>
                    {this.state.squares[i]}
                </button>
            </div>
        )
    }
    render() {
        return (
            <div>
                <p>next player is {this.state.isXnext ? 'x' : 'o'}</p>
                <div className="container row">
                    <div className="board-row">
                        {this.Square(1)}{this.Square(2)}{this.Square(3)}

                    </div>
                    <div className="board-row">
                        {this.Square(4)}{this.Square(5)}{this.Square(6)}

                    </div>
                    <div className="board-row">
                        {this.Square(7)}{this.Square(8)}{this.Square(9)}

                    </div>
                </div>
            </div>
        )
    }
}

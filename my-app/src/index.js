import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {

    render() {

      return (
        <button 
            className={this.props.className}
            onClick={() => this.props.onClick()}
        >
            
          {this.props.value} 

        </button>
      );
    }
  }
  
class Board extends React.Component {
    
    renderSquare(i) {
      return (
        <Square 
            className = {this.determineSquareColor(i)}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} 
             />
      );
    }

    determineSquareColor(j){
      const winningSquare = this.props.winningSquares;
      const winningSquaresGrid = {
        "0": false,
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
      };

      if (winningSquare.length > 0) {
        for (let i = 0 ; i < winningSquare.length ; i++) {
          winningSquaresGrid[winningSquare[i]] = true;
        }
      }

      if (winningSquaresGrid[j]) {
        return "win"
      } else {
        return "square"
      }

    }
  
    render() {

      
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [ {
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        currentlySelected: -1,
        lastSquareLocation: [],
        win: false
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0,this.state.stepNumber +1);
      const current = history[history.length-1];
      const squares = current.squares.slice();
      const lastSquareLocation = this.state.lastSquareLocation.slice();
      lastSquareLocation.push(i);

      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';

      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
        currentlySelected: history.length,
        lastSquareLocation: lastSquareLocation
      });
    }

    jumpTo (step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
        currentlySelected: step,
      });
    }

     render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move + ' on square ' + this.findSquareLocation(this.state.lastSquareLocation[move-1]) :
          'Go to game start';
          return (
            <li key = {move} className={this.state.currentlySelected === move ? "bolded" : "none"}>
              <button onClick={() => {this.jumpTo(move)}}>{desc}</button>
            </li>
          );
      });
      
      let winningSquares = [];

      let status;
      if (winner) {
        status = 'Winner: '+winner[0];
        winningSquares = winner[1];
      } else {
        status = 'Next player: '+ (this.state.xIsNext ? 'X' : 'O'); 
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              winningSquares = {winningSquares}
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }

    findSquareLocation (move) {
      
      const labels = {
        "0": "Column 1, Row 1",
        "1": "Column 2, Row 1",
        "2": "Column 3, Row 1",
        "3": "Column 1, Row 2",
        "4": "Column 2, Row 2",
        "5": "Column 3, Row 2",
        "6": "Column 1, Row 3",
        "7": "Column 2, Row 3",
        "8": "Column 3, Row 3",
      };

      return labels[move];

    }

  }
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [squares[a],lines[i]];
      }
    }
    return null;
  }

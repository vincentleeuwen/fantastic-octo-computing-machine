import Square from "./Square";
import React from 'react';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      playerName: "",
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "x" : "o";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleChange(e) {
    this.setState({playerName: e.target.value});
    const nameState = e.target.value;
    console.log(nameState);
    
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick={()=> this.handleClick(i)}
      />
      );
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    const status = getStatus(winner, this.state);

    return (
      <div>
      <form>
      <input placeholder="player1" value={this.state.playerName} onChange={(e) => this.handleChange(e)}></input>
    {/*  {console.log(this.state.playerName)}*/}

  {/* <input placeholder="player2" value=""></input>*/}
  </form>

  <div className="status">{status}</div>
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

export default Board

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
      return squares[a];
    }
  }
  return null;
}

function getPlayersName(player, nameState) {
  switch (player) {
    case "x": return "Name1";
    case "o": return "Name2";
  }
}

function getStatus(winner, state) {
  if (winner)
    return ('Winner: ' + getPlayersName(winner));
  else
    return 'Jetzt spielt:' + getPlayersName(state.xIsNext ? 'x' : 'o');
}


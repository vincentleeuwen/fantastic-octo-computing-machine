import Square from "../Square";
import React from 'react';


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      playerName: "",
    };
    this.getPlayersName = this.getPlayersName.bind(this);
    this.getStatus = this.getStatus.bind(this);
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
    this.setState({
      playerName: e.target.value,
    });
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick={()=> this.handleClick(i)}
      />
      );
  }
  
  getPlayersName(player) {
    const { playerName } = this.state;
    switch (player) {
      case "x": return playerName;
      case "o": return "Name2";
    }
  }

  getStatus(winner) {
    if (winner)
      return 'Winner: ' + this.getPlayersName(winner);
    else
      return 'Jetzt spielt:' + this.getPlayersName(this.state.xIsNext ? 'x' : 'o');
  }

  calculateWinner() {
    const { squares } = this.state;
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

  render() {

    const winner = this.calculateWinner();
    const status = this.getStatus(winner);


    return (
      <div>
      <form>
      <input placeholder="player1" value={this.state.playerName} onChange={(e) => this.handleChange(e)}/>
      {this.state.playerName}
      

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

export default Board;
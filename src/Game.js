import React from 'react';
import Board from "./Board";
import ReactDOM from 'react-dom';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


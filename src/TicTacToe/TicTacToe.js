import { Component } from 'react';
export default class TicTacToe extends Component {
  state = {
    squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  handler = (e) => {
    console.log(+e.target.dataset.index);
  };

  render = () => {
    return (
      <div className="tic-tac-toe" onClick={this.handler}>
        {this.state.squares.map((item) => (
          <div key={item} data-index={item} className="squere">
            {item}
          </div>
        ))}
      </div>
    );
  };
}

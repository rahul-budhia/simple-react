import React, {PropTypes} from 'react';
import Knight from './Knight';
import Square from './Square';
import { moveKnight, canMoveKnight } from './Game';

export default class Board extends React.Component {

  renderSquare (i) {
    const x = i % 8;
    const y = Math.floor( i / 8 );
    // console.log(`${x},${y}`)
    const black = ( x + y ) % 2;

    const [knightX, knightY] = this.props.knightPosition;

    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return(
      <Square
        key={i}
        black={black}
        onClick={this.handleSquareClick.bind(null, x, y)}>
          {piece}
      </Square>)
  }

  handleSquareClick = (x,y) => {
    if(canMoveKnight(x,y)) {
      moveKnight(x,y);
    }
  }

  render() {
    const squares = [];
    for (var i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div style = {{
        width:'650px',
        height:'650px',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

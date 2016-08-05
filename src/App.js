import React, { Component } from 'react';
import Board from './Board';
import { observe } from './Game';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      knightPosition: [0,0]
    }
  }

  componentDidMount = () => {
    observe(this.observer);
  }

  observer = (knightPosition) => {
    this.setState({knightPosition});
  }

  render() {
    return (
      <div>
        <Board knightPosition={this.state.knightPosition} />
      </div>
    );
  }
}

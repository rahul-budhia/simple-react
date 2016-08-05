import React, {PropTypes} from 'react';

export default class Square extends React.Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const color = black ? 'white' : 'black';
    return (
      <div style={{
        background: fill,
        color: color,
        width: '12.5%',
        height: '12.5%',
      }} {...this.props}>
          {this.props.children}
      </div>);
  }
}

Square.propTypes = {
  black: PropTypes.bool,
};

import React from 'react';

import Wall from './Wall';
import Corner from './Corner';
import Floor from './Floor';

import './styles.scss';

class Graph extends React.Component {
  // static edge(wall = false, door = false) {
  // }

  // static interior(floor = false, token = false, tokenID) {
  // }

  generateGrid() {
    // eslint-disable-next-line no-unused-vars
    const { walls, doors, tokens } = this.props;
    const gridX = 2250;
    const gridY = 2250;
    const gridSpacing = 30;

    const result = [];

    for (let row = 0; row < gridY; row += gridSpacing) {
      for (let cell = 0; cell < gridX; cell += gridSpacing) {
        result.push(<Corner id={cell} />);
        result.push(<Wall id={cell} />);
      }

      for (let cell = 0; cell < gridX; cell += gridSpacing) {
        result.push(<Wall vertical={true} id={cell} />);
        result.push(<Floor id={cell} />);
      }
    }

    return result;
  }

  render() {
    const grid = this.generateGrid();

    return (
      <div className='Grid'>
        <div className='wrapper'>
          {grid}
        </div>
      </div>
    );
  }
}

export default Graph;

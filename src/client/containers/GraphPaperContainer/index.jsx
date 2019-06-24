import React from 'react';
import { faTh } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import Grid from '../../components/Grid';
// import Button from '../../components/Button';

import './styles.scss';

class GraphPaperContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      walls: [],
      doors: [],
      tokens: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header title='Graph Paper' icon={faTh} />

        <div className='GraphPaperContainer'>
          <Grid
            walls={this.state.walls}
            doors={this.state.doors}
            tokens={this.state.tokens} />
        </div>
      </React.Fragment>
    );
  }
}

export default GraphPaperContainer;

import React from 'react';
import { faTh } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
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
          The Graph {this.state.walls}
        </div>
      </React.Fragment>
    );
  }
}

export default GraphPaperContainer;

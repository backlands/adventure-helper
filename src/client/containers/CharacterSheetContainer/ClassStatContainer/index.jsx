import React from 'react';
import ClassStats from '../../../components/ClassStats';

class ClassStatContainer extends React.Component {
  render() {
    const classes = this.props.classes.map((stats, index) => (
      <ClassStats
        key={index}
        id={index}
        stats={stats}
        handleChange={this.props.handleChange}
      />
    ));

    return classes;
  }
}

export default ClassStatContainer;

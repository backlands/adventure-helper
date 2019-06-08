import React from 'react';
import ClassStats from '../../components/smart/ClassStats';

class ClassStatContainer extends React.Component {
  render() {
    const classes = this.props.classes.map((aClass, index) => {
      const {
        hitdice,
        className,
        bab,
        skillPoints,
        favouredBonus,
        fortitudeBonus,
        reflexBonus,
        willBonus,
        levels,
      } = aClass;

      return (
        <ClassStats
          key={index}
          id={index}
          hitdice={hitdice}
          className={className}
          bab={bab}
          skillPoints={skillPoints}
          favouredBonus={favouredBonus}
          fortitudeBonus={fortitudeBonus}
          reflexBonus={reflexBonus}
          willBonus={willBonus}
          levels={levels}
          handleChange={this.props.handleChange}
        />
      );
    });

    return classes;
  }
}

export default ClassStatContainer;

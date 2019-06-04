import React from 'react';
import Skill from '../../components/smart/Skill';

class CharacterSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [
        {
          title: 'Acrobatics',
          attribute: 'DEX',
          ranks: 4,
          abilityBonus: 3,
          classSkill: true,
          misc: -3,
        },
        {
          title: 'Appraise',
          attribute: 'INT',
          ranks: 0,
          abilityBonus: 0,
          classSkill: false,
          misc: 0,
        },
        {
          title: 'Bluff',
          attribute: 'CHA',
          ranks: 4,
          abilityBonus: 1,
          classSkill: false,
          misc: 0,
        },
        {
          title: 'Climb',
          attribute: 'STR',
          ranks: 2,
          abilityBonus: 2,
          classSkill: true,
          misc: 0,
        },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    const theValue = type === 'checkbox' ? checked : value;

    const { skills } = this.state;

    skills[Number(id)][name] = theValue;

    this.setState({
      skills,
    });
  }

  skillElements() {
    const skills = this.state.skills.map((skill, index) => (
      <Skill
        key={index}
        id={index}
        title={skill.title}
        attribute={skill.attribute}
        ranks={skill.ranks}
        abilityBonus={skill.abilityBonus}
        classSkill={skill.classSkill}
        misc={skill.misc}
        handleChange={this.handleInputChange}
      />
    ));
    return skills;
  }

  render() {
    return (
      <div>
        <h2>Skills</h2>
        {this.skillElements()}
      </div>
    );
  }
}

export default CharacterSheetContainer;

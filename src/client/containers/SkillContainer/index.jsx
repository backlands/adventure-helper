import React from 'react';
import Skill from '../../components/Skill';

class SkillContainer extends React.Component {
  render() {
    const skills = this.props.skills.map((skill, index) => {
      const base = this.props.abilities[skill.ability].baseModifier;
      const temp = this.props.abilities[skill.ability].tempModifier;
      const bonus = temp !== '' ? temp : base;

      return (
        <Skill
          key={index}
          id={index}
          title={skill.title}
          ability={skill.ability}
          ranks={skill.ranks}
          abilityBonus={bonus}
          classSkill={skill.classSkill}
          misc={skill.misc}
          handleChange={this.props.handleChange}
        />
      );
    });

    return skills;
  }
}

export default SkillContainer;

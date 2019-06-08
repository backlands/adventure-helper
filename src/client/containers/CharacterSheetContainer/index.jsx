import React from 'react';
import Ability from '../../components/smart/Ability';
import ArmorClass from '../../components/smart/ArmorClass';
import CharacterDetails from '../../components/smart/CharacterDetails';
import ClassStats from '../../components/smart/ClassStats';
import Initiative from '../../components/smart/Initiative';
import Skill from '../../components/smart/Skill';

import characterData from './state.json';

class CharacterSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = characterData;

    this.handleAbilityChange = this.handleAbilityChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  handleInputChange(namespace, event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    let theValue = '';

    switch (type) {
      case 'checkbox':
        theValue = checked;
        break;
      case 'number':
        theValue = Number(value);
        break;
      default:
        theValue = value;
        break;
    }

    let newState = '';
    let state = namespace;

    if (id) {
      newState = this.state[namespace];
      newState[id][name] = theValue;
    } else if (namespace) {
      newState = this.state[namespace];
      newState[name] = theValue;
    } else {
      newState = this.state[name];
      state = name;
      newState = theValue;
    }

    this.setState({
      [state]: newState,
    });
  }

  handleAbilityChange(event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    if (name === 'temp') {
      const { abilities } = this.state;
      const { score, item } = abilities[Number(id)];

      const tempModifier = Math.floor((score + item - 10 + Number(value)) / 2);

      abilities[Number(id)].temp = Number(value);
      abilities[Number(id)].tempModifier = tempModifier;

      this.setState({
        abilities,
      });
    } else if (name === 'score') {
      const { abilities } = this.state;
      const { item } = abilities[Number(id)];

      const baseModifier = Math.floor((Number(value) + item - 10) / 2);

      abilities[Number(id)].score = Number(value);
      abilities[Number(id)].tempModifier = baseModifier;

      this.setState({
        abilities,
      });
    } else {
      const theValue = type === 'checkbox' ? checked : Number(value);

      const { abilities } = this.state;

      abilities[Number(id)][name] = theValue;

      this.setState({
        abilities,
      });
    }
  }

  handleSkillChange(event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    const theValue = type === 'checkbox' ? checked : Number(value);

    const { skills } = this.state;

    skills[Number(id)][name] = theValue;

    this.setState({
      skills,
    });
  }

  abilitiesToObject() {
    const abilities = {};

    this.state.abilities.forEach((ability) => {
      abilities[ability.title] = {
        baseModifier: ability.baseModifier,
        tempModifier: ability.tempModifier,
      };
    });

    return abilities;
  }

  classElements() {
    const classes = this.state.classes.map((aClass, index) => {
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
          handleChange={this.handleInputChange.bind(this, 'classes')}
        />
      );
    });
    return classes;
  }

  abilityElements() {
    const abilities = this.state.abilities.map((ability, index) => {
      const {
        title, score, item, temp, tempModifier,
      } = ability;

      const baseModifier = Math.floor((score + item - 10) / 2);
      let tempModified = '';

      if (Number(temp) !== 0 && temp !== '') {
        tempModified = tempModifier;
      }

      return (
        <Ability
          key={index}
          id={index}
          title={title}
          score={score}
          item={item}
          baseModifier={baseModifier}
          temp={temp}
          tempModifier={tempModified}
          handleChange={this.handleAbilityChange}
        />
      );
    });
    return abilities;
  }

  armorClasses() {
    const abilities = this.abilitiesToObject();
    const base = abilities.DEX.baseModifier;
    const temp = abilities.DEX.tempModifier;
    const bonus = temp !== '' ? temp : base;

    return (
      <React.Fragment>
        <ArmorClass
          title='Armor Class'
          type='regular'
          ability={bonus}
          values={this.state.armor}
          handleChange={this.handleInputChange.bind(this, 'armor')} />
        <ArmorClass
          title='Flat-Footed AC'
          type='flat'
          values={this.state.armor}
          handleChange={this.handleInputChange.bind(this, 'armor')} />
        <ArmorClass
          title='Touch AC'
          type='touch'
          ability={bonus}
          values={this.state.armor}
          handleChange={this.handleInputChange.bind(this, 'armor')} />
      </React.Fragment>
    );
  }

  initiative() {
    const abilities = this.abilitiesToObject();
    const base = abilities.DEX.baseModifier;
    const temp = abilities.DEX.tempModifier;
    const ability = temp !== '' ? temp : base;

    return (
      <Initiative
        ability={ability}
        bonus={this.state.initiativeBonus}
        handleChange={this.handleInputChange.bind(this, undefined)} />
    );
  }

  skillElements() {
    const abilities = this.abilitiesToObject();

    const skills = this.state.skills.map((skill, index) => {
      const base = abilities[skill.ability].baseModifier;
      const temp = abilities[skill.ability].tempModifier;
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
          handleChange={this.handleSkillChange}
        />
      );
    });
    return skills;
  }

  render() {
    return (
      <div>
        <h2>Character Details</h2>
        <CharacterDetails
          details={this.state.details}
          handleChange={this.handleInputChange.bind(this, 'details')} />
        <h2>Abilities</h2>
        {this.abilityElements()}
        <h2>Initiative</h2>
        {this.initiative()}
        <h2>Class Record</h2>
        {this.classElements()}
        <h2>Armor Classes</h2>
        {this.armorClasses()}
        <h2>Skills</h2>
        {this.skillElements()}
      </div>
    );
  }
}

export default CharacterSheetContainer;

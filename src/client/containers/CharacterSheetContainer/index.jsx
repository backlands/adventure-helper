import React from 'react';
import { faHelmetBattle } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import CharacterDetails from '../../components/CharacterDetails';
import Column from '../../components/Column';
import HitPoints from '../../components/HitPoints';
import Initiative from '../../components/Initiative';
import Row from '../../components/Row';
import TextArea from '../../components/TextArea';

import AbilityContainer from './AbilityContainer';
import ArmorClassContainer from './ArmorClassContainer';
import ClassStatContainer from './ClassStatContainer';
import CombatRollContainer from './CombatRollContainer';
import SaveRollContainer from './SaveRollContainer';
import SkillContainer from './SkillContainer';

import characterData from './state.json';
import './styles.scss';

class CharacterSheetContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = characterData;

    this.abilities = this.abilitiesToObject();

    this.handleAbilityChange = this.handleAbilityChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  componentWillUpdate() {
    this.abilities = this.abilitiesToObject();
  }

  handleInputChange(namespace = undefined, event) {
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
      value,
      name,
      id,
    } = event.target;

    const { abilities } = this.state;
    const { score, item, temp } = abilities[Number(id)];

    if (name === 'temp') {
      const tempModifier = Math.floor((score + item - 10 + Number(value)) / 2);

      abilities[Number(id)].temp = Number(value);
      abilities[Number(id)].tempModifier = tempModifier;

      this.setState({
        abilities,
      });
    } else if (name === 'score') {
      const baseModifier = Math.floor((Number(value) + item - 10) / 2);
      const tempModifier = Math.floor((Number(value) + item - 10 + temp) / 2);

      abilities[Number(id)].score = Number(value);
      abilities[Number(id)].baseModifier = baseModifier;
      abilities[Number(id)].tempModifier = tempModifier;

      this.setState({
        abilities,
      });
    } else if (name === 'item') {
      const baseModifier = Math.floor(score + (Number(value) - 10) / 2);
      const tempModifier = Math.floor((score + Number(value) - 10 + temp) / 2);

      abilities[Number(id)].item = Number(value);
      abilities[Number(id)].baseModifier = baseModifier;
      abilities[Number(id)].tempModifier = tempModifier;

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

  initiative() {
    const base = this.abilities.DEX.baseModifier;
    const temp = this.abilities.DEX.tempModifier;
    const ability = temp !== '' ? temp : base;

    return (
      <Initiative
        ability={ability}
        bonus={this.state.initiativeBonus}
        handleChange={this.handleInputChange.bind(this, undefined)} />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Header title='Character Sheet' icon={faHelmetBattle} />
        <Row classes='CharacterSheetContainer wrap'>
          <Column classes='is-12'>
            <CharacterDetails
              details={this.state.details}
              handleChange={this.handleInputChange.bind(this, 'details')} />
          </Column>
          <Column classes='is-8'>
            <Row>
              <Column classes='is-4'>
                <div className='first-row-labels'>
                  <h2>Abilities</h2>
                  <AbilityContainer
                    abilities={this.state.abilities}
                    handleChange={this.handleAbilityChange} />
                </div>
                <h2>Initiative</h2>
                {this.initiative()}
              </Column>
              <Column classes='is-8'>
                <div className='first-row-labels'>
                  <h2>Class Record</h2>
                  <ClassStatContainer
                    classes={this.state.classes}
                    handleChange={this.handleInputChange.bind(this, 'classes')} />
                </div>
                <HitPoints
                  total={this.state.hitpoints.total}
                  damageReduction={this.state.hitpoints.damageReduction}
                  wounds={this.state.hitpoints.wounds}
                  nonlethal={this.state.hitpoints.nonlethal}
                  handleChange={this.handleInputChange.bind(this, 'hitpoints')} />
              </Column>
            </Row>
            <Row classes='wrap'>
              <div className='first-row-labels'>
                <h2>Armor Classes</h2>
                <ArmorClassContainer
                  dexterity={this.abilities.DEX}
                  armor={this.state.armor}
                  handleChange={this.handleInputChange.bind(this, 'armor')} />
              </div>
            </Row>
            <Row>
              <Column classes='is-8'>
                <div className='first-row-labels'>
                  <h2>Save Rolls</h2>
                  <SaveRollContainer
                    saves={this.state.saves}
                    abilities={this.abilities}
                    classes={this.state.classes}
                    handleChange={this.handleInputChange.bind(this, 'saves')} />
                </div>
                <div className='first-row-labels'>
                  <h2>Combat Rolls</h2>
                  <CombatRollContainer
                    checks={this.state.combat}
                    abilities={this.abilities}
                    classes={this.state.classes}
                    cmd={this.state.cmd}
                    handleChange={this.handleInputChange.bind(this, 'combat')}
                    cmdHandleChange={this.handleInputChange.bind(this, 'cmd')} />
                </div>
              </Column>
              <Column classes='is-4'>
                <TextArea
                  name='combatNotes'
                  text='Notes'
                  className='full-height'
                  value={this.state.combatNotes}
                  defaultValue=''
                  handleChange={this.handleInputChange} />
              </Column>
            </Row>
          </Column>
          <Column classes='is-4'>
            <div className='first-row-labels'>
              <h2>Skills</h2>
              <SkillContainer
                abilities={this.abilities}
                skills={this.state.skills}
                handleChange={this.handleSkillChange} />
            </div>
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

export default CharacterSheetContainer;

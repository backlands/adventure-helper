import React from 'react';
import { faSwords } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import Unit from '../../components/Unit';
import Save from '../../components/Save';
import Column from '../../components/Column';
import Row from '../../components/Row';
import Button from '../../components/Button';

import './styles.scss';

class CombatTrackerContainer extends React.Component {
  constructor(props) {
    super(props);

    window.defaultState = {
      units: [],
      round: 1,
      combatant: 1,
      form: {},
      message: 'Combatant',
    };

    this.storageID = 'COMBAT';

    const loadedState = JSON.parse(localStorage.getItem(this.storageID));

    this.state = loadedState || window.defaultState;

    this.handleCreatorChange = this.handleCreatorChange.bind(this);
    this.handleExistingUnitChange = this.handleExistingUnitChange.bind(this);
    this.initiativeSort = this.initiativeSort.bind(this);
    this.nextUnit = this.nextUnit.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.removeConfirm = this.removeConfirm.bind(this);
    this.sortUp = this.sortUp.bind(this);
  }

  componentWillUnmount() {
    this.saveHandler();
  }

  saveHandler() {
    localStorage.setItem(this.storageID, JSON.stringify(this.state));
  }

  resetHandler() {
    localStorage.removeItem(this.storageID);

    this.setState({ ...window.defaultState });
  }

  handleCreatorChange(event) {
    const {
      type,
      checked,
      value,
      name,
    } = event.target;

    const theValue = type === 'checkbox' ? checked : value;

    const { form } = this.state;

    form[name] = theValue;

    this.setState({
      form,
    });
  }

  handleNewUnit(type) {
    this.setState((prevState) => {
      const unit = {
        ...prevState.form,
        type,
        id: new Date().getTime().toString(),
      };

      return {
        units: [...prevState.units, unit],
        form: {},
      };
    });
  }

  initiativeSort() {
    this.setState((prevState) => {
      const newOrder = prevState.units.sort(
        (a, b) => b.initiative - a.initiative,
      );

      return {
        units: [...newOrder],
      };
    });
  }

  nextUnit() {
    const combatant = this.state.combatant + 1;
    const unitCount = this.state.units.length;

    if (combatant < unitCount) {
      this.setState({
        combatant,
      });
    } else if (combatant === unitCount) {
      this.setState({
        combatant,
      });
    } else if (combatant > unitCount) {
      this.setState({
        combatant: 1,
        round: this.state.round + 1,
      });
    }
  }

  removeConfirm(event) {
    const { id } = event.target;
    const units = this.state.units.filter(unit => unit.id !== id);

    this.setState({
      units,
    });
  }

  sortUp(event) {
    const { id } = event.target;
    let originalPosition;
    let newPosition;
    const theUnit = this.state.units.find((unit, index) => {
      originalPosition = index;
      newPosition = index - 1;
      return unit.id === id;
    });

    if (originalPosition - 1 > this.state.units.length) {
      const units = this.state.units.splice(newPosition, 0, theUnit);

      this.setState({
        units,
      });
    }
  }

  sortDown(event) {
    const { id } = event.target;
    const units = this.state.units.filter(unit => unit.id !== id);

    this.setState({
      units,
    });
  }

  handleExistingUnitChange(event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    const theValue = type === 'checkbox' ? checked : value;

    const { units } = this.state;

    units[units.findIndex(unit => unit.id === id)][name] = theValue;

    this.setState({
      units,
    });
  }

  generateUnits(data, type) {
    return data.filter(unit => unit.type === type).map((unit) => {
      const {
        name,
        id,
        initiative = 0,
        hp = 0,
        speed = 0,
        melee = 0,
        ranged = 0,
        ac = 0,
        cmb = 0,
        cmd = 0,
      } = unit;

      return (
        <Unit
          key={id}
          id={id}
          type={type}
          name={name}
          initiative={initiative}
          hp={hp}
          speed={speed}
          melee={melee}
          ranged={ranged}
          ac={ac}
          cmb={cmb}
          cmd={cmd}
          handleChange={this.handleExistingUnitChange}
          removeConfirm={this.removeConfirm}
        />
      );
    });
  }

  render() {
    const allies = this.generateUnits(this.state.units, 'ally');
    const enemies = this.generateUnits(this.state.units, 'enemy');

    const currentRound = this.state.units
      .filter((unit, index) => !((index + 1) < this.state.combatant))
      .map(unit => unit.name)
      .join(' > ');

    const nextRound = this.state.units
      .map(unit => unit.name)
      .join(' > ');

    const next = this.state.round + 1;

    return (
      <React.Fragment>
        <Save saveHandler={this.saveHandler} resetHandler={this.resetHandler} />

        <Header title='Combat Tracker' icon={faSwords} />

        <div className='CombatTrackerContainer'>
          <Row classes='newUnit'>
            <Column>
              <Unit
              id={this.state.form.index || ''}
              type={this.state.form.type || ''}
              name={this.state.form.name || ''}
              initiative={this.state.form.initiative || ''}
              hp={this.state.form.hp || ''}
              speed={this.state.form.speed || ''}
              melee={this.state.form.melee || ''}
              ranged={this.state.form.ranged || ''}
              ac={this.state.form.ac || ''}
              cmb={this.state.form.cmb || ''}
              cmd={this.state.form.cmd || ''}
              list={false}
              handleChange={this.handleCreatorChange} />
            </Column>
          </Row>

          <Row classes='controllers space-between wrap'>
            <Column>
              <Button
                className='inline micro'
                handleClick={this.handleNewUnit.bind(this, 'ally')}>Add Ally</Button>
              <Button
                className='inline micro'
                handleClick={this.handleNewUnit.bind(this, 'enemy')}>Add Enemy</Button>
              { this.state.units.length >= 2
                  && <>
                    <Button
                      className='inline micro'
                      handleClick={this.initiativeSort}>Sort by Initiative</Button>
                    <Button
                      className='inline micro'
                      handleClick={this.nextUnit}>Next { this.state.combatant === this.state.units.length ? 'Round' : 'Combatant'}</Button>
                    <Button
                      className='inline micro'
                      handleClick={() => this.setState({
                        combatant: 1,
                        round: 1,
                      })}>Restart Combat</Button>
                  </>
              }
            </Column>
            <Column classes='shrink'>
              <h2 className='highlight'>Round { this.state.round }</h2>
            </Column>
          </Row>

          <hr />


          <div className='combatOrder'>
            Upcoming Combat Order: {currentRound}
            <span className='highlight'>[ Round {next} Begins ]</span>
            {nextRound}
          </div>

          <Row classes='wrap'>
            <Column classes='allies is-6'>
              <h2>Allies</h2>
              {allies}
            </Column>

            <Column classes='enemies is-6'>
              <h2>Enemies</h2>
              {enemies}
            </Column>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default CombatTrackerContainer;

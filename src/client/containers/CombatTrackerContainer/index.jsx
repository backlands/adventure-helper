import React from 'react';
import { faSwords } from '@fortawesome/pro-light-svg-icons';

import Header from '../../components/Header';
import Unit from '../../components/Unit';
import Save from '../../components/Save';

import combatData from './state.json';
import './styles.scss';
import Column from '../../components/Column';
import Row from '../../components/Row';

class CombatTrackerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.storageID = 'COMBAT';

    const loadedState = JSON.parse(localStorage.getItem(this.storageID));

    this.state = loadedState || combatData;


    this.handleChange = this.handleChange.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  componentWillUnmount() {
    this.saveHandler();
  }

  saveHandler() {
    localStorage.setItem(this.storageID, JSON.stringify(this.state));
  }

  resetHandler() {
    localStorage.removeItem(this.storageID);

    this.setState({ ...combatData });
  }

  handleChange(event) {
    const {
      type,
      checked,
      value,
      name,
      id,
    } = event.target;

    const theValue = type === 'checkbox' ? checked : value;

    const { units } = this.state;

    units[Number(id)][name] = theValue;

    this.setState({
      units,
    });
  }

  generateUnits(data, type) {
    return data.filter(unit => unit.type === type).map((unit, index) => {
      const {
        name,
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
          key={index}
          id={index}
          name={name}
          initiative={initiative}
          hp={hp}
          speed={speed}
          melee={melee}
          ranged={ranged}
          ac={ac}
          cmb={cmb}
          cmd={cmd}
          handleChange={this.handleChange}
        />
      );
    });
  }

  render() {
    const allies = this.generateUnits(this.state.units, 'ally');
    const enemies = this.generateUnits(this.state.units, 'enemy');

    return (
      <React.Fragment>
        <Save saveHandler={this.saveHandler} resetHandler={this.resetHandler} />

        <Header title='Combat Tracker' icon={faSwords} />

        <div className='CombatTrackerContainer'>
          <Row>
            <Column classes='is-6'>
              <h2>Allies</h2>
              {allies}
            </Column>

            <Column classes='is-6'>
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

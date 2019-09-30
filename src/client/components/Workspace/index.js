import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Footer from '../Footer';
import HomeContainer from '../../containers/HomeContainer';
import Loader from '../Loader';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import OGL from '../../pages/OGL';
import Help from '../../pages/Help';

import './styles.scss';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  }

  if (props.pastDelay) {
    return <Loader />;
  }

  return null;
}

const DiceRollerContainer = Loadable({
  loader: () => import(/* webpackChunkName: "DiceRoller" */ '../../containers/DiceRollerContainer'),
  loading: Loading,
});

const NotesContainer = Loadable({
  loader: () => import(/* webpackChunkName: "Notes" */ '../../containers/NotesContainer'),
  loading: Loading,
});

const CharacterSheetContainer = Loadable({
  loader: () => import(/* webpackChunkName: "CharacterSheet" */ '../../containers/CharacterSheetContainer'),
  loading: Loading,
});

const CombatTrackerContainer = Loadable({
  loader: () => import(/* webpackChunkName: "CombatTracker" */ '../../containers/CombatTrackerContainer'),
  loading: Loading,
});

const Workspace = () => (
  <div className='Workspace'>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/dice-roller/" exact component={DiceRollerContainer} />
    <Route path="/note-sheet/" exact component={NotesContainer} />
    <Route path="/character-sheet/" exact component={CharacterSheetContainer} />
    <Route path="/combat-tracker/" exact component={CombatTrackerContainer} />
    <Route path="/privacy-policy/" exact component={PrivacyPolicy} />
    <Route path="/ogl/" exact component={OGL} />
    <Route path="/help/" exact component={Help} />

    <Footer />
  </div>
);

export default Workspace;

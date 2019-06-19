import React from 'react';
import { Route } from 'react-router-dom';
import { faHome } from '@fortawesome/pro-light-svg-icons';

import Header from '../Header';
import Footer from '../Footer';
import DiceRollerContainer from '../../containers/DiceRollerContainer';
import NotesContainer from '../../containers/NotesContainer';
import CharacterSheetContainer from '../../containers/CharacterSheetContainer';
import PrivacyPolicy from '../PrivacyPolicy';

import './styles.scss';

const Workspace = () => (
  <div className='Workspace'>
    <Route path="/" exact component={() => (<Header title='Home' icon={faHome} />)} />
    <Route path="/dice-roller/" component={DiceRollerContainer} />
    <Route path="/note-sheet/" component={NotesContainer} />
    <Route path="/character-sheet/" component={CharacterSheetContainer} />
    <Route path="/privacy-policy/" component={PrivacyPolicy} />


    <Footer />
  </div>
);

export default Workspace;

import React from 'react';
import { Route } from 'react-router-dom';

import Footer from '../Footer';
import HomeContainer from '../../containers/HomeContainer';
import DiceRollerContainer from '../../containers/DiceRollerContainer';
import NotesContainer from '../../containers/NotesContainer';
import CharacterSheetContainer from '../../containers/CharacterSheetContainer';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import OGL from '../../pages/OGL';
import Help from '../../pages/Help';

import './styles.scss';

const Workspace = () => (
  <div className='Workspace'>
    <Route path="/" exact component={HomeContainer} />
    <Route path="/dice-roller/" exact component={DiceRollerContainer} />
    <Route path="/note-sheet/" exact component={NotesContainer} />
    <Route path="/character-sheet/" exact component={CharacterSheetContainer} />
    <Route path="/combat-tracker/" exact component={CharacterSheetContainer} />
    <Route path="/privacy-policy/" exact component={PrivacyPolicy} />
    <Route path="/ogl/" exact component={OGL} />
    <Route path="/help/" exact component={Help} />

    <Footer />
  </div>
);

export default Workspace;

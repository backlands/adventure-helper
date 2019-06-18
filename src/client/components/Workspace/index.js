import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import DiceRollerContainer from '../../containers/DiceRollerContainer';
import NotesContainer from '../../containers/NotesContainer';
import CharacterSheetContainer from '../../containers/CharacterSheetContainer';

import './styles.scss';

const Workspace = () => (
  <div className='Workspace'>
    <Header />

    <Route path="/" exact component={() => (<h2>Home</h2>)} />
    <Route path="/dice-roller/" component={DiceRollerContainer} />
    <Route path="/note-sheet/" component={NotesContainer} />
    <Route path="/character-sheet/" component={CharacterSheetContainer} />

    <Footer />
  </div>
);

export default Workspace;

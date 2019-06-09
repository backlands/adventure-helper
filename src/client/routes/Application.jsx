import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import DiceRollerContainer from '../containers/DiceRollerContainer';
import NotesContainer from '../containers/NotesContainer';
import CharacterSheetContainer from '../containers/CharacterSheetContainer';

import 'normalize.css';
import '../styles/base.scss';

function Application() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route path="/" exact component={() => (<h2>Home</h2>)} />
        <Route path="/dice-roller/" component={DiceRollerContainer} />
        <Route path="/note-sheet/" component={NotesContainer} />
        <Route path="/character-sheet/" component={CharacterSheetContainer} />
      </div>
    </Router>
  );
}

export default Application;

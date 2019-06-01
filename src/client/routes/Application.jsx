import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/dumb/Navbar';
import DiceRollerContainer from '../containers/DiceRollerContainer';
import NoteSheetContainer from '../containers/NoteSheetContainer';

function Application() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route path="/" exact component={() => (<h2>Home</h2>)} />
        <Route path="/dice-roller/" component={DiceRollerContainer} />
        <Route path="/note-sheet/" component={NoteSheetContainer} />
      </div>
    </Router>
  );
}

export default Application;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Workspace from '../../components/Workspace';

import 'normalize.css';
import '../../styles/base.scss';

function Application() {
  return (
    <Router>
      <Navbar />

      <Workspace />
    </Router>
  );
}

export default Application;

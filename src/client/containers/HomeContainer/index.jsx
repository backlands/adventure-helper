import React from 'react';

import Navbar from '../../components/Navbar';
import './styles.scss';

const CharacterSheetContainer = () => (
  <React.Fragment>
    <Navbar
      className='HomeContainer cards'
      hideToggle={true} />
  </React.Fragment>
);

export default CharacterSheetContainer;

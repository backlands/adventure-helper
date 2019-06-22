import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/pro-solid-svg-icons';

import Button from '../Button';

import './styles.scss';

const Save = ({ saveHandler, resetHandler }) => (
  <div className='Save'>
    <Button handleClick={saveHandler}>
      <FontAwesomeIcon icon={faSave} size='lg' />
    </Button>

    <Button handleClick={resetHandler}>
      <FontAwesomeIcon icon={faTrash} size='lg' />
    </Button>
  </div>
);

export default Save;

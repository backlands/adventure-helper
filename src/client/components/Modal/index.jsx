import React, { useState, useEffect } from 'react';

import Button from '../Button';

import './styles.scss';

const Modal = ({
  children,
  onConfirm,
  onCancel,
  confirm = 'Yes',
  cancel = 'Cancel',
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`Modal${show ? ' show' : ''}`}>
      <div className='dialog'>
        {children}
        <div className='buttons'>
          <Button className='confirm' handleClick={onConfirm}>{confirm}</Button>
          <Button className='cancel' handleClick={onCancel}>{cancel}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

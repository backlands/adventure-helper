import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Select = ({ className, options, active, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const [selected, setSelected] = useState(options.indexOf(active) || undefined);

  const onClick = (e) => {
    const { textContent, id } = e.target;

    if (onSelect) {
      onSelect(textContent);
    }

    setSelected(Number(id));
  };

  const map = options.map((option, index) => (
    <div
      className={`Option${selected === index ? ' active' : ''}`}
      id={index}
      key={index}
      onClick={onClick}>
      {option}
    </div>
  ));

  return (
    <div
      tabIndex='-1'
      className={
        classNames(
          'Select',
          className, {
            'is-expanded': expanded,
          },
        )
      }
      onBlur={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)} >
      <div className="selected">
        { selected !== undefined ? active : 'Please Select an Option'}
      </div>
      <div className='options'>
        {map}
      </div>
    </div>
  );
};

export default Select;

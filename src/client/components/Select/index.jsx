import React, { useState } from 'react';
import classNames from 'classnames';

import './styles.scss';

// eslint-disable-next-line object-curly-newline
const Select = ({ className, options, active, onSelect }) => {
  const [expanded, setExpanded] = useState(false);

  const [selected, setSelected] = useState();

  if (active && options.indexOf(active) !== selected) {
    setSelected(options.indexOf(active));
  }

  const onClick = (e) => {
    const { textContent, id } = e.target;
    console.log(textContent, id);

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
        { selected !== undefined ? options[selected] : 'Please Select an Option'}
      </div>

      <div className='options'>
        {map}
      </div>
    </div>
  );
};

export default Select;

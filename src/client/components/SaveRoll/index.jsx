import React from 'react';
import Input from '../Input';

const SaveRoll = ({
  title,
  base,
  ability,
  enhance,
  misc,
  temp,
  id,
  handleChange,
}) => {
  const total = base + ability + enhance + misc + temp;

  return (
    <div>
      {title}
      <Input
        type='number'
        name='total'
        readOnly
        value={total} />
      <span>=</span>
        <Input
        type='number'
        name='base'
        readOnly
        value={base} />
      <span>+</span>
        <Input
        type='number'
        name='ability'
        readOnly
        value={ability} />
      <span>+</span>
        <Input
        type='number'
        name='enhance'
        id={id}
        value={enhance}
        handleChange={handleChange} />
      <span>+</span>
        <Input
        type='number'
        name='misc'
        id={id}
        value={misc}
        handleChange={handleChange} />
      <span>+</span>
      <Input
        type='number'
        name='temp'
        id={id}
        value={temp}
        handleChange={handleChange} />
    </div>
  );
};

export default SaveRoll;

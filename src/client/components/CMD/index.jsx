import React from 'react';
import Input from '../Input';

const CombatRoll = ({
  bab,
  abilities,
  size,
  temp,
  id,
  handleChange,
}) => {
  const staticBonus = 10;
  const singleBAB = Number(bab[0]);
  const total = singleBAB + abilities + size + temp + staticBonus;

  return (
    <div>
      CMD
      <Input
        type='text'
        name='total'
        readOnly
        value={total} />
      <span>=</span>
        <Input
        type='text'
        name='bab'
        readOnly
        value={singleBAB} />
      <span>+</span>
        <Input
        type='number'
        name='abilities'
        readOnly
        value={abilities} />
      <span>+</span>
      <Input
        type='number'
        name='size'
        id={id}
        value={size}
        handleChange={handleChange} />
      <span>+</span>
      <Input
        type='number'
        name='temp'
        id={id}
        value={temp}
        handleChange={handleChange} />
      <span>+</span>
      <span>10</span>
    </div>
  );
};

export default CombatRoll;

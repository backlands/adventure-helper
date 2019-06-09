import React from 'react';
import Row from '../Row';
import Input from '../Input';

const CombatRoll = ({
  title,
  bab,
  ability,
  size,
  temp,
  misc,
  id,
  handleChange,
}) => {
  const total = [];
  bab.forEach((value, index) => {
    total[index] = (Number(value) + ability + size + misc + temp);
  });

  return (
    <Row>
      {title}
      <Input
        type='text'
        name='total'
        readOnly
        value={total.join(' / ')} />
      <span>=</span>
        <Input
        type='text'
        name='bab'
        readOnly
        value={bab.join(' / ')} />
      <span>+</span>
        <Input
        type='number'
        name='ability'
        readOnly
        value={ability} />
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
        <Input
        type='number'
        name='misc'
        id={id}
        value={misc}
        handleChange={handleChange} />
    </Row>
  );
};

export default CombatRoll;

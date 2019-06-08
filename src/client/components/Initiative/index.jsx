import React from 'react';
import Input from '../Input';

const Skill = ({
  ability,
  bonus,
  handleChange,
}) => {
  const total = ability + bonus;
  return (
    <div>
      <Input
        type='number'
        name='total'
        readOnly
        value={total} />
      <Input
        type='number'
        name='ability'
        readOnly
        value={ability} />
      <Input
        type='number'
        name='initiativeBonus'
        value={bonus}
        handleChange={handleChange} />
    </div>
  );
};

export default Skill;

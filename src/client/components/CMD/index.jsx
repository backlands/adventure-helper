import React from 'react';
import Row from '../Row';
import Input from '../Input';
import Column from '../Column';

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
    <Row>
      <Column classes='is-2'><span>CMD</span></Column>
      <Column>
        <Input
          type='text'
          name='total'
          readOnly
          value={total} />
      </Column>
      <Column classes='shrink'><span>=</span></Column>
        <Column>
        <Input
          type='text'
          name='bab'
          readOnly
          value={singleBAB} />
        </Column>
      <Column classes='shrink'><span>+</span></Column>
        <Column>
          <Input
            type='number'
            name='abilities'
            readOnly
            value={abilities} />
        </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='size'
          id={id}
          value={size}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='temp'
          id={id}
          value={temp}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column><span>10</span></Column>
    </Row>
  );
};

export default CombatRoll;

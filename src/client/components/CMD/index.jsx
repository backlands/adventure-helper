import React from 'react';
import Row from '../Row';
import Input from '../Input';
import Column from '../Column';

const CombatRoll = ({
  bab = 0,
  abilities = 0,
  size = 0,
  temp = 0,
  id,
  handleChange,
}) => {
  const staticBonus = 10;
  const total = bab + abilities + size + temp + staticBonus;

  return (
    <Row classes='middle'>
      <Column classes='is-2'><h3>CMD</h3></Column>
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
          value={bab} />
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
      <Column>
        <Input
          type='number'
          name='temp'
          id={id}
          value={10}
          readOnly />
        </Column>
    </Row>
  );
};

export default CombatRoll;

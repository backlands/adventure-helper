import React from 'react';
import Row from '../Row';
import Input from '../Input';
import Column from '../Column';

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
      <Column classes='is-2'><span>{title}</span></Column>
      <Column>
        <Input
          type='text'
          name='total'
          text='Total'
          readOnly
          value={total.join(' / ')} />
      </Column>
      <Column classes='shrink'><span>=</span></Column>
      <Column>
        <Input
          type='text'
          name='bab'
          text='BAB'
          readOnly
          value={bab.join(' / ')} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='ability'
          text='Ability'
          readOnly
          value={ability} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='size'
          text='Size'
          id={id}
          value={size}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='temp'
          text='Temp'
          id={id}
          value={temp}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='misc'
          text='Misc'
          id={id}
          value={misc}
          handleChange={handleChange} />
      </Column>
    </Row>
  );
};

export default CombatRoll;

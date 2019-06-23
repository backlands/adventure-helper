import React from 'react';
import Input from '../Input';
import Row from '../Row';
import Column from '../Column';

const Skill = ({
  ability = 0,
  bonus = 0,
  handleChange,
}) => {
  const total = ability + bonus;
  return (
    <Row>
      <Column>
        <Input
          type='number'
          text='Total'
          name='total'
          readOnly
          value={total} />
      </Column>
      <Column>
        <Input
          type='number'
          text='Dex'
          name='ability'
          readOnly
          value={ability} />
      </Column>
      <Column>
        <Input
          type='number'
          text='Misc'
          name='initiativeBonus'
          value={bonus}
          handleChange={handleChange} />
      </Column>
    </Row>
  );
};

export default Skill;

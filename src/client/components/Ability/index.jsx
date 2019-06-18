import React from 'react';
import Row from '../Row';
import Column from '../Column';
import Input from '../Input';

const Ability = ({
  title,
  id,
  score,
  item,
  baseModifier,
  temp,
  tempModifier,
  handleChange,
}) => (
  <Row>
    <Column>
      <span>{title}</span>
    </Column>
    <Column>
      <Input
        type='number'
        name='score'
        text='Score'
        id={id}
        value={score}
        handleChange={handleChange} />
    </Column>
    <Column>
      <Input
        type='number'
        name='item'
        text='Item'
        id={id}
        value={item}
        handleChange={handleChange} />
    </Column>
    <Column>
      <Input
        type='number'
        name='baseModifier'
        text='Bonus'
        id={id}
        readOnly
        value={baseModifier} />
    </Column>
    <Column>
      <Input
        type='number'
        name='temp'
        text='Temp'
        id={id}
        value={temp}
        handleChange={handleChange} />
    </Column>
    <Column>
      <Input
        type='number'
        name='tempModifier'
        text='Temp Mod'
        id={id}
        readOnly
        value={tempModifier} />
    </Column>
  </Row>
);

export default Ability;

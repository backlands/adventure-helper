import React from 'react';
import Input from '../Input';
import Row from '../Row';

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
    <span>{title}</span>
    <Input
      type='number'
      name='score'
      id={id}
      value={score}
      handleChange={handleChange} />
    <Input
      type='number'
      name='item'
      id={id}
      value={item}
      handleChange={handleChange} />
    <Input
      type='number'
      name='baseModifier'
      id={id}
      readOnly
      value={baseModifier} />
    <Input
      type='number'
      name='temp'
      id={id}
      value={temp}
      handleChange={handleChange} />
    <Input
      type='number'
      name='tempModifier'
      id={id}
      readOnly
      value={tempModifier} />
  </Row>
);

export default Ability;

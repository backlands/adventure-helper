import React from 'react';
import Row from '../Row';
import Input from '../Input';

const ArmorClass = ({
  title,
  values,
  ability,
  type,
  id,
  handleChange,
}) => {
  const {
    armor,
    shield,
    dodge,
    size,
    natural,
    deflection,
    misc,
  } = values;

  let total = '';
  const base = 10;
  const gear = armor + shield;
  const always = size + deflection + misc;

  switch (type) {
    case 'regular':
      total = (base + gear + ability + dodge + natural + always);
      break;
    case 'flat':
      total = (base + gear + natural + always);
      break;
    case 'touch':
      total = (base + ability + dodge + always);
      break;
    default:
      break;
  }

  return (
    <Row>
      {title}
      <Input
        type='number'
        name={type}
        readOnly
        value={total} />
      <span>=</span>
      <span>10</span>
      <span>+</span>
      {type !== 'touch' ? (
        <Input
        type='number'
        name='armor'
        id={id}
        value={values.armor}
        handleChange={handleChange} />
      ) : ('N/A')}
      <span>+</span>
      {type !== 'touch' ? (
        <Input
        type='number'
        name='shield'
        id={id}
        value={values.shield}
        handleChange={handleChange} />
      ) : ('N/A')}
      <span>+</span>
      {type !== 'flat' ? (
        <Input
        type='number'
        name='ability'
        readOnly
        value={ability} />
      ) : ('N/A')}
      <span>+</span>
      {type !== 'flat' ? (
        <Input
        type='number'
        name='dodge'
        id={id}
        value={values.dodge}
        handleChange={handleChange} />
      ) : ('N/A')}
      <span>+</span>
      <Input
        type='number'
        name='size'
        id={id}
        value={values.size}
        handleChange={handleChange} />
      <span>+</span>
      {type !== 'touch' ? (
        <Input
        type='number'
        name='natural'
        id={id}
        value={values.natural}
        handleChange={handleChange} />
      ) : ('N/A')}
      <span>+</span>
      <Input
        type='number'
        name='deflection'
        id={id}
        value={values.deflection}
        handleChange={handleChange} />
      <span>+</span>
      <Input
        type='number'
        name='misc'
        id={id}
        value={values.misc}
        handleChange={handleChange} />
    </Row>
  );
};

export default ArmorClass;

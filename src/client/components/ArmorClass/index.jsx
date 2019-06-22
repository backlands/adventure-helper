import React from 'react';
import Row from '../Row';
import Input from '../Input';
import Column from '../Column';

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
    <Row classes='middle'>
      <Column classes='is-2'>
        <h3>{title}</h3>
      </Column>
      <Column>
        <Input
          type='number'
          name={type}
          text='Total'
          readOnly
          value={total} />
      </Column>
      <Column classes='shrink'><span>=</span></Column>
      <Column classes='shrink'><span>10</span></Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        {type !== 'touch' ? (
          <Input
            type='number'
            name='armor'
            text='Armor'
            id={id}
            value={values.armor}
            handleChange={handleChange} />
        ) : (
          <Input
            type='text'
            name='armor'
            text='Armor'
            value='N/A'
            readOnly />
        )}
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        {type !== 'touch' ? (
          <Input
            type='number'
            name='shield'
            text='Shield'
            id={id}
            value={values.shield}
            handleChange={handleChange} />
        ) : (
          <Input
            type='text'
            name='shield'
            text='Shield'
            value='N/A'
            readOnly />
        )}
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        {type !== 'flat' ? (
          <Input
            type='number'
            name='ability'
            text='Ability'
            readOnly
            value={ability} />
        ) : (
          <Input
            type='text'
            name='ability'
            text='Ability'
            value='N/A'
            readOnly />
        )}
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        {type !== 'flat' ? (
          <Input
            type='number'
            name='dodge'
            text='Dodge'
            id={id}
            value={values.dodge}
            handleChange={handleChange} />
        ) : (
          <Input
            type='text'
            name='dodge'
            text='Dodge'
            value='N/A'
            readOnly />
        )}
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='size'
          text='Size'
          id={id}
          value={values.size}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        {type !== 'touch' ? (
          <Input
            type='number'
            name='natural'
            text='Natural'
            id={id}
            value={values.natural}
            handleChange={handleChange} />
        ) : (
          <Input
            type='text'
            name='natural'
            text='Natural'
            value='N/A'
            readOnly />
        )}
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='deflection'
          text='Deflection'
          id={id}
          value={values.deflection}
          handleChange={handleChange} />
      </Column>
      <Column classes='shrink'><span>+</span></Column>
      <Column>
        <Input
          type='number'
          name='misc'
          text='Misc'
          id={id}
          value={values.misc}
          handleChange={handleChange} />
      </Column>
    </Row>
  );
};

export default ArmorClass;

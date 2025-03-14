import React from 'react';
import Input from '../Input';
import Row from '../Row';
import Column from '../Column';

const SaveRoll = ({
  title,
  base = 0,
  ability = 0,
  enhance = 0,
  misc = 0,
  temp = 0,
  id,
  handleChange,
}) => {
  const total = base + ability + enhance + misc + temp;

  return (
    <Row classes='middle'>
      <Column classes='is-3'><h3>{title}</h3></Column>
      <Column>
        <Input
          type='number'
          name='total'
          text='Total'
          readOnly
          value={total} />
      </Column>
      <Column classes='shrink'><span>=</span></Column>
      <Column>
        <Input
        type='number'
        name='base'
        text='Base'
        readOnly
        value={base} />
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
        name='enhance'
        text='Enhance'
        id={id}
        value={enhance}
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
    </Row>
  );
};

export default SaveRoll;

import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Incrementer(props) {
  return (
    <main className="liquid--counter--increase text-center">
      {props.name}
      <Button variant='outline-primary' onChange={console.log('-1')}>-</Button>
      <span>{'DYNAMIC COUNT'}</span>
      <Button variant='outline-primary' onChange={console.log('+1')}>+</Button>
    </main>
  )
};
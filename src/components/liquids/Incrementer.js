import React from 'react';
import Button from 'react-bootstrap/Button'

export default function Incrementer(props) {
  return (
    <main className="liquid--counter--increase text-center">
      {props.name}
      <Button variant='outline-primary' onClick={(event) => props.handleDecrease(event)}>-</Button>
      <span>{props.count}</span>
      <Button variant='outline-primary' onClick={(event) => props.handleIncrease(event)}>+</Button>
    </main>
  )
};
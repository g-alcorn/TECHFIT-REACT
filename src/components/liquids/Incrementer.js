import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button'

export default function Incrementer(props) {
  return (
    <Fragment className="liquid--counter--increase text-center">
      {props.name}
      <Button className={`${props.name}-decrease-`} variant='outline-primary' onClick={(event) => props.handleDecrease(event)}>-</Button>
      {props.count}
      <Button className={`${props.name}-increase-`} variant='outline-primary' onClick={(event) => props.handleIncrease(event)}>+</Button>
    </Fragment>
  )
};
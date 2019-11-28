import React from 'react';
import Incrementer from './Incrementer';
import './Tracker.scss';


export default function Tracker(props) {
  return (
    <section className="liquid--tracker text-center">
      <h3>Liquid Consumption Tracker</h3>
      <table className="text-center">
        <tbody>
          <tr>
            <td><Incrementer name={'Water '} onClick={props.incrementWater}/></td>
          </tr>        
          <tr>
            <td><Incrementer name={'Coffee'} onClick={props.incrementCoffee}/></td>
          </tr>
          <tr>
            <td><Incrementer name={'Soda '} onClick={props.incrementSoda}/></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
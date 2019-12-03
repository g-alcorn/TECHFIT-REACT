import React from 'react';
import Incrementer from './Incrementer';
import './Tracker.scss';


export default function Tracker({ waterCounter, coffeeCounter, sodaCounter, otherCounter }) {
  return (
    <section className="liquid--tracker text-center">
      <h3>Liquid Consumption Tracker</h3>
      <table className="text-center">
        <tbody>
          <tr>
            <td>{waterCounter}</td>
          </tr>        
          <tr>
            <td>{coffeeCounter}</td>
          </tr>
          <tr>
            <td>{sodaCounter}</td>
          </tr>
          <tr>
            <td>{otherCounter}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
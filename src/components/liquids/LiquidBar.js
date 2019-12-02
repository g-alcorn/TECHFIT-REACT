import React, { Fragment, useEffect } from 'react';
import axios from 'axios';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryStack, VictoryTheme } from 'victory';
import GenerateBar from './GenerateBar.js';

export default function LiquidBar({ user }) {
 
  //CREATE REQUEST TO SERVER FOR DATA HERE
  //useEffect from React
  //One request for all drink data???
  //we want to separate each drink from the results
  //we want to select the most recent 7 results

  //we want to send the value to GenerateBar
  //we want to generate {x, y} pair for each result

  //HANDLES SIDE EFFECTS
  //Runs every time component is updated
  useEffect(() => {
    axios
      .get(`/api/user-drinks/?id=${user.id}`)
      .then((res) => {
        generateData(res.data);
        console.log('data fetched!')
      })
      .catch((e) => {
        console.log(e);
      });
  });

  //DATA MANIPULATION
  //GENERATE {x, y} PAIR FOR ALL DAYS
  //x-value is the index of the day
  //x-value should be relative to current time so that the current day is index 7
  //x-value for 7 days ago should be 1

  //y-value is the % of total drinks
  //y-value is calculated from drinkCount / totalDrinkCount
  
  function generateData(serverData) {
    for(let i = serverData.length; i >= 0, i--;) {
      console.log(serverData[i])
    }
  }


  return (
    <Fragment>
      {/* CHART CONTAINER */}
      <VictoryChart 
        height={500}
        width={500}
        theme={VictoryTheme.material}>

        {/* X AXIS */}
        <VictoryAxis crossAxis
          domain={[0, 7]}
          theme={VictoryTheme.material}
          offsetY={50}
          standalone={false}
        />

        {/* Y AXIS */}
        <VictoryAxis dependentAxis crossAxis
          domain={[0, 15]}
          theme={VictoryTheme.material}
          offsetX={50}
          standalone={false}
        />
      
        {/* LINE GRAPH WITH DEFAULT DATA */}
        <VictoryLine />

        {/* STACKED BAR CHART */}
        <VictoryStack>
          {GenerateBar('water')}
          {GenerateBar('coffee')}
          {GenerateBar('soda')}
        </VictoryStack>
      </VictoryChart>
    </Fragment>
  )
}
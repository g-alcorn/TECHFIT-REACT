import React, { Fragment } from 'react';
import { VictoryPie } from 'victory';


export default function LiquidPie(props) {
  return (
    <Fragment>
      {/* PIE CHART */}
      <VictoryPie 
        height={300}
        width={300}
        animate={{
          onLoad: {duration: 1500}
        }}
        labels={['water', 'coffee', 'soda', 'other']}
        colorScale={['cyan', 'tan', 'tomato', 'orange']}
        style={{
          data: { fillOpacity: 0.7, stroke: '#636363', strokeWidth: 0.1 },
          labels: { fontSize: 12 }
        }}
      />
    </Fragment>
  )
}
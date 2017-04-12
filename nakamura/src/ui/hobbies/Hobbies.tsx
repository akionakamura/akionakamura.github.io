import * as React from 'react';
import Chart from './Chart';

const state = {
    data: [
    {id: '5fbmzmtc', x: 7, y: 41, z: 6},
    {id: 's4f8phwm', x: 11, y: 45, z: 9}
  ],
  domain: {x: [0, 30], y: [0, 100]},
  tooltip: null,
  prevDomain: null,
  showingAllTooltips: true
}

class Hobbies extends React.Component<any, any> {
  constructor() {
    super();
  }

  render() {
    return (
        <div className='App'>
            <Chart appState={state}/>
        </div>
    );
  }
}

export default Hobbies;

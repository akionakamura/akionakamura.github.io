import * as React from 'react';
import Map from './map/Map'

class Hobbies extends React.Component<any, any> {
  constructor() {
    super();
  }

  render() {
    return (
        <div className='Hobbies'>
          <Map />
        </div>
    );
  }
}

export default Hobbies;

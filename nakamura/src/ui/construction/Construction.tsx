import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './Construction.css';

class Construction extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
        <div className='construction'>
            <LinearProgress mode='indeterminate' />
            <div className='construction-text'> Under Construction </div>
            <LinearProgress mode='indeterminate' />
        </div>
    );
  }
}

export default Construction;

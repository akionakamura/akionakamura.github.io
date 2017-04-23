import * as React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './Loading.css';

class Loading extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
    return (
        <div className='loading'>
            <LinearProgress mode='indeterminate' />
            <div className='loading-text'> Loading </div>
            <LinearProgress mode='indeterminate' />
        </div>
    );
  }
}

export default Loading;

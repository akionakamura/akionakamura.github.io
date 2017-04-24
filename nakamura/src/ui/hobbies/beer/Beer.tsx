import * as React from 'react';

import './Beer.css';

class Beer extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
      return (
          <div className='beer'>
            <div className='beer-blockquote'>
              I am a firm believer in the people. If given the truth, they can be depended upon to meet any national crisis. The great point is to bring them the real facts, and beer.
              <br />
              <br />
              – Abraham Lincoln
            </div>
            <div className='beer-text'>
                Beer text.
            </div>
          </div>
      );
  }
}

export default Beer;

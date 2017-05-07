import * as React from 'react';

import './Motorcycle.css';

class Motorcycle extends React.Component<any, any> {
  constructor() {
    super();
  }
  render() {
      return (
          <div className='moto'>
            <div className='moto-blockquote'>
              In a car you're always in a compartment, and because you're used to it you don't realize that through that car window everything you see is just more TV. You're a passive observer and it is all moving by you boringly in a frame. 
              On a cycle the frame is gone. You're completely in contact with it all. You're <em>in</em> the scene, not just watching it anymore, and the sense of presence is overwhelming.
              <br />
              <br />
              - Robert M. Pirsig, Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values
            </div>
            <div className='moto-text'>
              My bike has grown to be more than my daily commute, it's made that "lost" time incredibly enjoyble and fun. It's a great weekend pastime activity, either riding it or DIY'ing some small project.
              I'm still a newbie in this world, but every journey starts with the first mile.
            </div>
          </div>
      );
  }
}

export default Motorcycle;

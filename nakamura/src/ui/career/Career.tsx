import * as React from 'react';

import './Career.css'

class Career extends React.Component<any, any> {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='career'>
        <header>
          <h1>Experience</h1>
        </header>
        <div id='cd-timeline' className='cd-container'>
          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-picture'>
              <span className='fa fa-link' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Software Engineer @ WorldSense</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
              <a href='#0' className='cd-read-more'>Read more</a>
              <span className='cd-date'>Jan 16 - Now</span>
            </div> 
          </div> 

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-movie'>
              <span className='fa fa-graduation-cap' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Software Engineering Intern @ WorldSense</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
              <a href='#0' className='cd-read-more'>Read more</a>
              <span className='cd-date'>Mar 15 - Dec 16</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-picture'>
              <span className='fa fa-search' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Undergraduate Researcher @ UFMG</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
              <a href='#0' className='cd-read-more'>Read more</a>
              <span className='cd-date'>Jun 12 - Dec 15</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-location'>
              <span className='fa fa-pencil' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Electrical and Telecommunication System Designer @ PROJELET</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
              <a href='#0' className='cd-read-more'>Read more</a>
              <span className='cd-date'>Mar 09 - Nov 09</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-location'>
              <span className='fa fa-link' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Title of section 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
              <a href='#0' className='cd-read-more'>Read more</a>
              <span className='cd-date'>Feb 18</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-movie'>
              <span className='fa fa-link' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Final Section</h2>
              <p>This is the content of the last section</p>
              <span className='cd-date'>Feb 26</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Career;

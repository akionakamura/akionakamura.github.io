import * as $ from 'jquery';
import * as React from 'react';

import './Career.css'

class Career extends React.Component<any, any> {
  constructor() {
    super();
  }
  onReadMoreClick(evt: any) {
    $(evt.target.parentElement).toggleClass('show-more')
  }
  render() {
    return (
      <div className='career'>
        <div id='cd-timeline' className='cd-container'>
          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-picture'>
              <span className='fa fa-link' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Software Engineer</h2>
              <h4>@ WorldSense</h4>
              <p>
                Full stack software engineer, working at WorldSense from the start of the company, having a central role in all the main parts of the product,
                from the UI to the backend, serving scalability and infrastructure, monitoring and reporting and machine learning algorithms.
                <br />
                <div className='cd-more'> 
                  <ul>
                    <li>Frontend: JavaScript, TypeScript, Backbone, React, Chrome Extension.</li>
                    <li>Backend: Scala, Java, Spark.</li>
                    <li>Machine learning: Python, Spark, Keras, TensorFlow, Gensim,</li>
                    <li>Services and Misc: AWS, Elastic stack, Docker.</li>
                  </ul>
                </div>
              </p>
              <span className='cd-read-more' onClick={this.onReadMoreClick} />
              <span className='cd-date'>Jan 16 - Now</span>
            </div> 
          </div> 

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-movie'>
              <span className='fa fa-graduation-cap' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Software Engineering Intern</h2>
              <h4>@ WorldSense</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                <br />
                <div className='cd-more'> 
                  <ul>
                    <li>lorem</li>
                    <li>lorem 2</li>
                    <li>lorem 3</li>
                    <li>lorem 4</li>
                  </ul>
                </div>
              </p>
              <span className='cd-read-more' onClick={this.onReadMoreClick} />
              <span className='cd-date'>Mar 15 - Dec 16</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-picture'>
              <span className='fa fa-search' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Undergraduate Researcher</h2>
              <h4>@ UFMG</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                <br />
                <div className='cd-more'> 
                  <ul>
                    <li>lorem</li>
                    <li>lorem 2</li>
                    <li>lorem 3</li>
                    <li>lorem 4</li>
                  </ul>
                </div>
              </p>
              <span className='cd-read-more' onClick={this.onReadMoreClick} />
              <span className='cd-date'>Jun 12 - Dec 15</span>
            </div>
          </div>

          <div className='cd-timeline-block'>
            <div className='cd-timeline-img cd-location'>
              <span className='fa fa-pencil' aria-hidden='true' />
            </div>

            <div className='cd-timeline-content'>
              <h2>Electrical and Telecommunication System Designer</h2>
              <h4>@ PROJELET</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                <br />
                <div className='cd-more'> 
                  <ul>
                    <li>lorem</li>
                    <li>lorem 2</li>
                    <li>lorem 3</li>
                    <li>lorem 4</li>
                  </ul>
                </div>
              </p>
              <span className='cd-read-more' onClick={this.onReadMoreClick} />
              <span className='cd-date'>Mar 09 - Nov 09</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Career;

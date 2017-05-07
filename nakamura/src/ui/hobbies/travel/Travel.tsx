import * as React from 'react';
import * as Promise from 'bluebird';

import createPlotlyComponent from 'react-plotlyjs';
import * as plotly from 'plotly.js/dist/plotly-geo.min.js';

import Paper from 'material-ui/Paper';

import Loading from '../../loading/Loading'
import imageMapping from './imageMapping';
import layout from './MapLayout'
import './Travel.css';

const PlotlyComponent = createPlotlyComponent(plotly);

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const width = (windowWidth > 800) ? Math.min(Math.min(windowWidth * 0.25, windowHeight * 0.3), 300) : windowWidth * 0.5

const photoStyle = {
  width: width,
  height: width,
  margin: 5,
  'margin-top': 15,
  display: 'inline-block'
};

class Travel extends React.Component<any, any> {
  constructor() {
    super();
    this.onHover = this.onHover.bind(this);
    this.state = {
        city: 'Belo Horizonte',
        image: require('./images/Belo_Horizonte.jpg'),
        data: [],
        loaded: false
    }
  }
  loadData() {
    console.log('Loading map data...')
    return new Promise((resolve, reject) =>
        plotly.d3.csv(require('./data.csv'), (err, rows) => {
          function unpack(key: string, asNumber?: boolean) {
              return rows.map(function(row: any) { 
                  const raw = row[key]
                  return (asNumber) ? Number(raw) : raw; 
              });
          }
          if (err) {
            reject(err)
          } else {
            console.log('Got response', rows)
            const data = [{
                type: 'scattergeo',
                mode: 'markers',
                text: unpack('AccentCity'),
                lat: unpack('Latitude', true),
                lon: unpack('Longitude', true),
                marker: {
                    size: 7,
                },
                name: 'Visited',
                textposition: [
                    'top right', 'top left', 'top center', 'bottom right', 'top right',
                    'top left', 'bottom right', 'bottom left', 'top right', 'top right'
                ],
                hoverinfo: 'text',
            }];
            resolve(data)
          }
        }))
  }

  setData() {
    return this.loadData().tap((data) => {
      this.setState({
        data: data
      })
    }).catch((err) => {
      console.error('Error', err)
    })
  }
  componentDidMount() {
      if (!this.state.started) {
          this.setData().tap(() => {
              this.setState({ loaded: true });
          })
      }
  }
  onHover(data: any) {
    const city = data.points[0].data.text[data.points[0].pointNumber];
    this.setState({ city: city, image: imageMapping[city] })
  }
  render() {
    if (this.state.loaded) {
      return (
          <div className='travel'>
            <div className='travel-blockquote'>
              A journey is a person in itself; no two are alike. And all plans, safeguards, policing, and coercion are fruitless. We find that after years of struggle that we do not take a trip; a trip takes us.
              <br />
              <br />
              – John Steinbeck, Travels with Charley: In Search of America
            </div>
            <div className='travel-text'>
              Travelling is one of my greatest passions. It all started when I lived in Italy as a child for around a year.
              Since then, I've also lived in Germany and the UK, besides my beloved homeland, and visited many other places.
              I believe experiencing the new is always exciting and few things does it better than travelling. You have spontaneous adventures, stories for life and usually get to see the best in people.
              You learn so much about yourself and others, you'll rarely come back the same. And food, there is always a different and awesome food right around the corner.
              <br />
              <br />
              Each point in the map bellow holds me a very dear memory, and I hope to keep expanding it.
            </div>
            <div className='travel-map'>
              <div className='travel-map-geo'><PlotlyComponent data={this.state.data} layout={layout} onHover={this.onHover} config={{displayModeBar: false}} /></div> 
              <div className='travel-photo-frame'>
                <Paper className='travel-photo-paper' style={photoStyle}  zDepth={5}>
                  <img className='travel-photo' src={this.state.image} />
                  <div className='travel-city-overlay'>{this.state.city}</div>
                </Paper>
              </div>
            </div>
          </div>
      );
    } else {
      return (
        <Loading />
      )
    }
  }
}

export default Travel;

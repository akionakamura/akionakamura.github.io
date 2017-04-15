import * as React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import * as plotly from 'plotly.js/dist/plotly-geo.min.js';
import Paper from 'material-ui/Paper';
import data from './data'
import layout from './layout'
import imageMapping from './imageMapping'

const PlotlyComponent = createPlotlyComponent(plotly);

const style = {
  height: '20%',
  width: '20%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Map extends React.Component<any, any> {
  constructor() {
    super();
    this.onHover = this.onHover.bind(this);
    this.state = {
        city: 'Belo Horizonte',
        image: require('./images/Belo_Horizonte.jpg')
    }
  }

  onHover(data: any) {
      const city = data.points[0].data.text[data.points[0].pointNumber];
      this.setState({ city: city, image: imageMapping[city] })
  }
  render() {
    return (
        <div className='Hobbies'>
          <Paper style={style} zDepth={2}><img style={{ width: '100%', padding: 5 }} src={this.state.image} /></Paper>
          <PlotlyComponent style={{width: '60%'}} className='whatever' data={data} layout={layout} onHover={this.onHover}/>  
        </div>
    );
  }
}

export default Map;

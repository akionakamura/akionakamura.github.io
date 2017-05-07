import * as React from 'react';
import * as _ from 'underscore';

import createPlotlyComponent from 'react-plotlyjs';
import * as plotly from 'plotly.js/dist/plotly-cartesian.js';

const PlotlyComponent = createPlotlyComponent(plotly);

import './Beer.css';

var data = require('./my_untappd.json')

const layoutAbvAndIbu = {
  hovermode: 'closest',
  xaxis: {
    type: 'log'
  },
  height: 280,
  showlegend: false,
  title: 'Beers ABV and IBU',
  margin: {
      l: 30,
      r: 0,
      b: 30,
      t: 40
  },
  padding: {
      r: 0,
      l: 0,
      b: 0,
      t: 0
  },
  titlefont: {
    size: 12
  }
};

const layoutPieChart = {
  showlegend: false,
  title: 'Total of ' + data.length + ' beers.',
  height: 200,
  margin: {
      l: 0,
      r: 0,
      b: 20,
      t: 40
  },
  padding: {
      r: 0,
      l: 0,
      b: 0,
      t: 0
  },
  titlefont: {
    size: 12
  }
};

const layoutHistogram = {
  barmode: 'overlay', 
  title: 'Rating Distribution', 
  height: 200,
  showlegend: true,
  legend: {'orientation': 'h'},
  margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 40
  },
  padding: {
      r: 0,
      l: 0,
      b: 0,
      t: 0
  },
  titlefont: {
    size: 12
  }
};
class Beer extends React.Component<any, any> {
  constructor() {
    super();
  }
  abvAndIbuPlot() {
    const byStyle = _.groupBy(data, (beer: any) => {
      return beer.style;
    })
    const traces = _.map(byStyle, (beers: any[], style: string) => {
      return {
        x: _.pluck(beers, 'ibu'),
        y: _.pluck(beers, 'abv'),
        mode: 'markers',
        text: _.map(beers, (beer) => beer.name + ' (' + beer.abv + '% - ' + beer.ibu + ' IBU)</br>' + beer.style + '</br>' + beer.brewery),
        hoverinfo: 'text',
        name: style,
        textposition: 'bottom center',
        marker: { size: 12 }
      }
    })
    return traces;
  }
  stylePieChart() {
    const byStyle = _.groupBy(data, (beer: any) => {
      return beer.style;
    })
    const traces = [{
      values: _.map(byStyle, (beers: any[], style: string) => beers.length),
      labels: _.keys(byStyle),
      type: 'pie',
      textinfo: 'none'
    }]
    return traces;
  }
  rateHistogram() {
    const trace1 = {
      x: _.map(data, (beer: any) => beer.myScore),
      type: 'histogram',
      opacity: 0.5,
      marker: {
        color: 'green',
      },
      name: 'My Ratings'
    };
    const trace2 = {
      x: _.map(data, (beer: any) => beer.globalScore),
      type: 'histogram',
      opacity: 0.5,
      marker: {
        color: 'red',
      },
      name: 'Global Ratings'
    };
    const traces = [trace1, trace2];
    return traces;
  }
  render() {
      return (
          <div className='beer'>
            <div className='beer-blockquote'>
              In gathering together with people we trust,
              we all take a moment to remember and fuss. 
              Sit back and smile and wonder –
              stand up and laugh about blunders. 
              Lean a bit closer and gather round beer,
              making a case that you all have to hear.
              <br />
              <br />
              – Sonnet 43
            </div>
            <div className='beer-text'>
              <p>As much as drunk talk this might sound, I love beer. Beer is much more than a hoppy taste and a tipsy head.
              Beer is <a href='http://sixpoint.com/about/beer-is-culture'>culture</a>, <a href='http://www.nytimes.com/2013/03/17/opinion/sunday/how-beer-gave-us-civilization.html'> history</a>, <a href='http://www.huffingtonpost.com/jeff-tomczek/conversation-over-beer_b_5993746.html'>connection</a> and <a href='https://thisiswhyimdrunk.blog/why-i-love-beer/'>personal</a>.
              My latest experiments with <a href='https://untappd.com/WhyNotBrewery'>homebrewing</a> taught me that beer is <a href='https://www.theguardian.com/science/blog/2011/jul/29/science-magic-beer'>science</a>, <a href='http://www.beerscenemag.com/2014/05/the-science-of-brewing-vs-the-art-of-beer/'>art</a> and family too.
              Beer is also universal, and it happens to fit very well with my passion for travelling,
              you can hardly find a place without a (hoppefully good) beer to go with that traditional dish of wherever you are.
              </p>
              <p>
              Here is a very brief analysis of the beers I have on my <a href='https://untappd.com/user/akionakamura'>Untappd</a> that I like to play around once in a while.
              I do plan on expanding this to get a deeper (statistical) understanding on my favorite beers.
              </p>
            </div>
            <div className='beer-text'>
              <div className='beer-scatter'><PlotlyComponent data={this.abvAndIbuPlot()} layout={layoutAbvAndIbu} config={{displayModeBar: false}} /></div>
              <div className='beer-pie'><PlotlyComponent data={this.stylePieChart()} layout={layoutPieChart} config={{displayModeBar: false}} /></div>
              <div className='beer-histogram'><PlotlyComponent data={this.rateHistogram()} layout={layoutHistogram} config={{displayModeBar: false}} /></div>
            </div>
          </div>
      );
  }
}

export default Beer;

import * as React from 'react';
import * as ReactDOM from 'react-dom'
import * as _ from 'lodash'
import { EventEmitter }  from 'events';
import D3Chart from './d3Chart';

const d3Chart = new D3Chart()

require('./Chart.css');

class Chart extends React.Component<any, any> {
  dispatcher: EventEmitter
  defaultProps: {
      width: '100%',
      height: '300px'
    }

  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);
    var dispatcher = d3Chart.create(el, { width: this.props.width, height: this.props.height }, this.getChartState());
    dispatcher.on('point:mouseover', _.bind(this.showTooltip, this));
    dispatcher.on('point:mouseout', _.bind(this.hideTooltip, this));
    this.dispatcher = dispatcher;
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState(), this.dispatcher);
  }

  getChartState() {
    var appState = this.props.appState;

    var tooltips = [];
    if (appState.showingAllTooltips) {
      tooltips = appState.data;
    } else if (appState.tooltip) {
      tooltips = [appState.tooltip];
    }

    return _.assign({}, appState, {tooltips: tooltips});
  }

  render() {
    return (
      <div className='Chart' />
    );
  }

  showTooltip(d: any) {
    if (this.props.appState.showingAllTooltips) {
      return;
    }

    this.setState({
      appState: {
        tooltip: d,
        // Disable animation
        prevDomain: null
      }
    });
  }

  hideTooltip() {
    if (this.props.appState.showingAllTooltips) {
      return;
    }
    
    this.setState({
      appState: {
        tooltip: null,
        prevDomain: null
      }
    });
  }
};

export default Chart;

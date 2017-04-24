import * as React from 'react';

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';

import Construction from '../construction/Construction'
import Travel from './travel/Travel';
import Beer from './beer/Beer';
import Motorcycle from './motorcycle/Motorcycle';

const travelIcon = <FontIcon className="material-icons">location_on</FontIcon>;
const beerIcon = <FontIcon className="material-icons">local_drink</FontIcon>;
const motoIcon = <FontIcon className="material-icons">motorcycle</FontIcon>;

class Hobbies extends React.Component<any, any> {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }
  select = (index) => this.setState({selectedIndex: index});
  renderHobby = () => {
      if (this.state.selectedIndex === 0) {
        return (
          <Travel />
        );
      } else if (this.state.selectedIndex === 1) {
        return (
          <Beer />
        );
      } else if (this.state.selectedIndex === 2) {
        return (
          <Motorcycle />
        );
      } else {
        return (
          <Construction />
        );
      }
  }
  render() {
    return (
        <div className='Hobbies'>
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label='Travel'
              icon={travelIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label='Beer'
              icon={beerIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label='Motorcyle'
              icon={motoIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
          {this.renderHobby()}
        </div>
    );
  }
}

export default Hobbies;

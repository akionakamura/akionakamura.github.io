import * as React from 'react';

import { CardHeader } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import Overview from '../overview/Overview';
import Career from '../career/Career';
import Education from '../education/Education';
import Hobbies from '../hobbies/Hobbies';

const profileImg = require('./images/profile.jpg')

const rootStyle = {
  background: '#1E88E5',
} as React.CSSProperties
const headerStyle = {
  background: '#1E88E5',
  minHeight: 54
} as React.CSSProperties
const profileStyle = {
  float: 'left',
  padding: 5
} as React.CSSProperties
const profileTitleStyle = {
  color: '#E0E0E0'
} as React.CSSProperties
const profileSubTitleStyle = {
  color: '#E0E0E0'
} as React.CSSProperties
const socialStyle = {
  float: 'right',
  'margin-right': 20
} as React.CSSProperties
const tabsStyle = {
  background: '#2196F3'
} as React.CSSProperties

interface AppTabsProps {
    value: string
}

class AppTabs extends React.Component<AppTabsProps, any> {
  constructor(props: AppTabsProps) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (value: string) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div style={rootStyle}>
        <div style={headerStyle}>
          <CardHeader
            title='Thiago Akio Nakamura'
            subtitle='Software Engineer'
            avatar={profileImg}
            style={profileStyle}
            titleStyle={profileTitleStyle}
            subtitleStyle={profileSubTitleStyle}
          />
          <div style={socialStyle}>
            <a href='https://www.linkedin.com/in/akionakas' className='fa fa-linkedin' />
            <a href='https://github.com/akionakamura' className='fa fa-github' />
            <a href='https://www.facebook.com/akionakas' className='fa fa-facebook-square'  />
            <a href='https://www.instagram.com/akionakas' className='fa fa-instagram' />
          </div>
        </div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label='Overview' value='overview' style={tabsStyle}>
            <Overview />
          </Tab>
          <Tab label='Career' value='career' style={tabsStyle}>
             <Career />
          </Tab>
          <Tab label='Education' value='education' style={tabsStyle}>
             <Education />
          </Tab>
          <Tab label='Hobbies' value='hobbies' style={tabsStyle}>
             <Hobbies />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default AppTabs;

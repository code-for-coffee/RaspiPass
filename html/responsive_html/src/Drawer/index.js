import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.png';

class NavigationDrawer extends Component {

  constructor(props) {
    super(props);
  }

  click = () => {
    this.props.sandwichClick();
  }

  render() {
    return (
      <div>
        <div
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.props.open}
                docked={this.props.docked}
        >
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>RaspiPass</h2>
          </section>
          <MenuItem>Tasks</MenuItem>
          <MenuItem>Access Points</MenuItem>
          <MenuItem>Configuration</MenuItem>
          <MenuItem>Log Viewer</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default NavigationDrawer;
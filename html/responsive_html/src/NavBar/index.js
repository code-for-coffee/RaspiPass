/**
 * Created by codeforcoffee on 4/16/17.
 */

import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TasksPane from '../TasksPane/index';

const NavBar = () => (
  <Tabs>
    <Tab label="Tasks">
      <TasksPane />
    </Tab>
    <Tab label="Config" />
    <Tab label="StreetPass APs" />
    <Tab label="Logs" />
  </Tabs>
);

export default NavBar;
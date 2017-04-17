/**
 * Created by codeforcoffee on 4/16/17.
 */
import React, {Component} from 'react';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class TasksPane extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardTitle
          title="Administrative Tasks"
          subtitle="Manage your Homepass settings and Raspberry Pi"
        />
        <CardActions>
          <FlatButton label="Start your HomePass">
          </FlatButton>

          <Divider />
          <FlatButton label="Restart Raspberry Pi" />
          <Divider />
          <FlatButton label="Shutdown Raspberry Pi" />
        </CardActions>
      </Card>
    )
  }
}

export default TasksPane;
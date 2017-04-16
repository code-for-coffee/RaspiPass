import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  click = () => {
    this.props.sandwichClick();
  }

  render() {
    return (
      <AppBar
        title="RaspiPass"
        onTitleTouchTap={this.click}
        iconElementLeft={<IconButton><MenuIcon onTouchTap={this.click} /></IconButton>}
      />
    );
  }
}

export default Header;
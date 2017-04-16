import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './App.css';
import Footer from './Footer/index';
import AppBar from './AppBar/index';
import NavDrawer from './Drawer/index';
/* required for Material-UI */

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink900} from 'material-ui/styles/colors';
/* end Material-UI requirement */

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: pink900,
//   },
// });

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      docked: false
    };
  }

  handleMenuToggle = () => this.setState({
    drawerOpen: !this.state.drawerOpen,
    docked: !this.state.docked
  });

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

        <div className="App">
          <AppBar sandwichClick={this.handleMenuToggle} />
          <NavDrawer open={this.state.drawerOpen}
                     onRequestChange={open => false}
          />

          <p className="App-intro">
            His name was Link. During his travels he had come across Impa and Ganon's henchmen. Impa told Link the whole story of Princess Zelda and the evil Ganon. Burning with a sense of justice, Link resolved to save Zelda, but Ganon was a powerful opponent. He held the Triforce of Power. And so, in order to fight off Ganon, Link had to bring the scattered eight fragments of the Triforce of Wisdom together to rebuild the mystical triangle. If he couldn't do this, there would be no chance Link could fight his way into Death Mountain where Ganon lived.
          </p>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

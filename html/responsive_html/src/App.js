import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import './App.css';
import Footer from './Footer/index';
import AppBar from './AppBar/index';
import NavBar from './NavBar/index';

import {
  pink900, pink700,
  greenA200,
  greenA400, grey300, grey400, greenA700,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
/* required for Material-UI */

import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {pink900} from 'material-ui/styles/colors';
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

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({
        spacing: spacing,
        fontFamily: 'Roboto, sans-serif',
        palette: {
          primary1Color: pink700,
          primary2Color: pink900,
          primary3Color: grey400,
          accent1Color: greenA200,
          accent2Color: greenA400,
          accent3Color: greenA700,
          textColor: darkBlack,
          alternateTextColor: white,
          canvasColor: white,
          borderColor: grey300,
          disabledColor: fade(darkBlack, 0.3),
          pickerHeaderColor: pink900,
          clockCircleColor: fade(darkBlack, 0.07),
          shadowColor: fullBlack,
        },
      })}>

        <div className="App">
          <AppBar />
          <NavBar />

          {/*<p className="App-intro">*/}
            {/*His name was Link. During his travels he had come across Impa and Ganon's henchmen. Impa told Link the whole story of Princess Zelda and the evil Ganon. Burning with a sense of justice, Link resolved to save Zelda, but Ganon was a powerful opponent. He held the Triforce of Power. And so, in order to fight off Ganon, Link had to bring the scattered eight fragments of the Triforce of Wisdom together to rebuild the mystical triangle. If he couldn't do this, there would be no chance Link could fight his way into Death Mountain where Ganon lived.*/}
          {/*</p>*/}
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

/**
 * Created by codeforcoffee on 4/16/17.
 */
import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    let githubUrl = 'https://github.com/Pinchie/RaspiPass/wiki';
    return (
      <footer>
        <section className="container">
          <p><small>♥ Thank you for using RaspiPass. If you need help, check out the <a href={githubUrl} target="_blank">Wiki</a>.</small></p>
        </section>
      </footer>
    );
  }
}

export default FooterComponent;
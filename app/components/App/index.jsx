import React from 'react';
import Scroll from 'react-scroll';
import ScrollToTop from 'react-scroll-up';

import Header from '../Header';
import Footer from '../Footer';

require('./styles.scss');

const Element = Scroll.Element;

// Include jQuery and Bootstrap JavaScript
window.$ = window.jQuery = require('jquery');
const Bootstrap = require('bootstrap-sass');

Bootstrap.$ = window.$;
require('bootstrap-sass/assets/javascripts/bootstrap');

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Element name="scroll-container" className="wrapper container">
          {this.props.children}
        </Element>
        <Footer />
        <ScrollToTop
          className="scroll-top-container"
          showUnder={120}
          duration={1000}
          style={{
            position: 'fixed',
            bottom: 15,
            right: 10,
            cursor: 'pointer',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'ease-in',
            transitionDelay: '0s',
            zIndex: 2000,
          }}
        >
          <div id="topControl">
            <i className="fa fa-angle-up" />
          </div>
        </ScrollToTop>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Header from '../Header';
import Education from '../Education';
import Experiences from '../Experiences';
import Skills from '../Skills';
import Publications from '../Publications';
import HonorsAwards from '../HonorsAwards';
import Boomerangs from '../Boomerangs';
import Footer from '../Footer';

require('./styles.scss');

const App = () =>
  <div>
    <Header />
    <div className="wrapper container">
      <Experiences />
      <Education />
      <Skills />
      <Publications />
      <HonorsAwards />
      <Boomerangs />
    </div>
    <Footer />
    <ScrollToTop
      showUnder={120}
      duration={1000}
      style={{
        position: 'fixed',
        bottom: 15,
        right: 10,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in',
        transitionDelay: '0s'
      }}
    >
      <div id="topControl">
        <i className="fa fa-angle-up" />
      </div>
    </ScrollToTop>
  </div>;

export default App;

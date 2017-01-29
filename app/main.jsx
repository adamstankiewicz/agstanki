import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Router, browserHistory } from 'react-router';

import Experiences from './components/Experiences';
import Education from './components/Education';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Publications from './components/Publications';
import HonorsAwards from './components/HonorsAwards';
import Boomerangs from './components/Boomerangs';

import App from './components/App';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-57421502-1');
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Experiences },
  childRoutes: [
    { path: 'experience', component: Experiences },
    { path: 'education', component: Education },
    { path: 'skills', component: Skills },
    { path: 'testimonials', component: Testimonials },
    { path: 'publications', component: Publications },
    { path: 'honors-awards', component: HonorsAwards },
    { path: 'boomerangs', component: Boomerangs },
  ],
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Router history={browserHistory} routes={routes} onUpdate={logPageView} />,
  document.body.appendChild(document.createElement('div'))
);

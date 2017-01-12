import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './components/App';

ReactGA.initialize('UA-57421502-1');
ReactGA.pageview('/');

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div'))
);

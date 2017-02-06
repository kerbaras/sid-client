import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from './components/Router';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

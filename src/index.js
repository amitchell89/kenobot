import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './views/router';

require('./css/index.scss');

ReactDOM.render((
  <Routes />
), document.getElementById('app'));

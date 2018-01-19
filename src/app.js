'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

//import scss
import './app.scss';

//need {} when import from components
import {Logo} from './components/Logo/Logo';

ReactDOM.render(
  <h1>
    <Logo /> My App
  </h1>,
  document.getElementById('app')
)

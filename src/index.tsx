import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Tile from './Tile';
import Modal from './Modal';
import Welcome from './Welcome';

import '@skyux/theme/css/sky.css';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        path="/"
        component={Welcome}
        exact />
      <Route
        path="/tile"
        component={Tile} />
      <Route
        path="/modal"
        component={Modal} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
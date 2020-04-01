import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Tile from './Tile';
import Modal from './Modal';

import '@skyux/theme/css/sky.css';
import './index.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        path="/"
        exact>
        <p>
          Welcome to the SKY Add-ins React Demo.
        </p>
        <p>
          Proceed to <Link to="/tile">Tile</Link>.
        </p>
      </Route>
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
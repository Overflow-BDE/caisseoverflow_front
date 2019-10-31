import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Menu';
import CashIn from './CashIn';

import '../css/App.css';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <CashIn />
          </Route>
        </Switch>
      </Router>
    );
  }

}
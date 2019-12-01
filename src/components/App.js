import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Menu';
import CashIn from './CashIn';

import '../css/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItemsAction } from '../actions/ItemsAction';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchItems({})
  }

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

export default connect(
  state => ({}),
  dispatch => ({
    fetchItems: bindActionCreators(fetchItemsAction, dispatch)
  })
)(App)
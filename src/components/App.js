import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './Menu';
import CashIn from './CashIn';
import OrderList from './OrderList';

import '../css/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItemsAction } from '../actions/ItemsAction';

import Snackbar from './Snackbar'

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
          <Route exact path="/orders">
            <OrderList/>
          </Route>
        </Switch>
        <Snackbar/>
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
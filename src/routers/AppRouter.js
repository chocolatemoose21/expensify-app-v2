import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header/>
    <Switch>
      <Route path="/" component={LoginPage} exact={true}/>
      <Route path="/dashboard" component={ExpenseDashboardPage}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </Router>
);

export default AppRouter;

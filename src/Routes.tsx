import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import UserContext from './data/UserContext';

const Routes = () => {
  return (
    <UserContext>
      <Router>
        <Switch>
          <Route path="/" render={(props) => <Landing />} />
        </Switch>
      </Router>
    </UserContext>
  );
};

export default Routes;

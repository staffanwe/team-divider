import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import UserContext from './data/UserContext';
import FiveMan from './pages/FiveMan';
import FiveVFive from './pages/FiveVFive';
import Players from './pages/Players';

const Routes = () => {
  return (
    <UserContext>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/5man" exact component={FiveMan} />
          <Route path="/5v5" exact component={FiveVFive} />
          <Route path="/players" exact component={Players} />
        </Switch>
      </Router>
    </UserContext>
  );
};

export default Routes;

import React, { useEffect, useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { Page1 } from './page/Page1';
import { Page2 } from './page/Page2';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route to="/page1" />
      </Switch>
    </Router>
  );
}
export default App;

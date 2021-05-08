import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Page1 } from './page/Page1';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route to="/page1" />
      </Switch>
    </Router>
  );
}
export default App;

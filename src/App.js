import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { homePage, statistics } from "./pages";
import { Navigation } from "./components";

function App() {
  return (
    <Router>
          <Navigation/>                
            <Switch>
              <Route exact path="/" component={homePage}/>
              <Route path="/statistics" component={statistics}/>
            </Switch>
        </Router>
  );
}

export default App;

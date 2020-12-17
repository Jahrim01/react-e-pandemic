import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { homePage, Statistics } from "./pages";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <Navigation/>                  
        <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/statistics" component={Statistics}/>
        </Switch>
    </Router>
  );
}

export default App;

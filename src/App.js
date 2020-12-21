import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { homePage, Statistics } from "./pages";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";
import './App.module.scss';

function App() {
  return (
    <Router>
      <Navigation/>                  
        <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/Statistics" component={Statistics}/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

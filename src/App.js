import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, Statistics } from "./pages";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/Footer";
import './App.module.scss';

function App() {
  return (
    <Router>
      <Navigation/>                  
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Statistics" component={Statistics}/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;

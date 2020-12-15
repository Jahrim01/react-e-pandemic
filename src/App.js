import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from "./components/navigation";
import homePage from "./pages/homePage";
import statistics from "./pages/statistics";

// import Pictures from './pictures.json';

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

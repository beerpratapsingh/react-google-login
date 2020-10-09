import React from 'react';
import './App.css';

//IMPORT COMPONENTS
import Auth from './Auth/Auth';
import Home from './Auth/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Auth}>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Auth}>
            {/* <Auth /> */}
          </Route>
          <Route path="/home" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="*">
            <Auth />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

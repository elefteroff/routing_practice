import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Hello from './components/Hello';
import Number from './components/Number';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:hello/:backgroundcolor/:exactcolor">
          <Hello />
        </Route>
        <Route path="/:num">
          <Number />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
    
export default App;


import React from "react";
import "./App.css";
import Mashup from "./components/mashup";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/up">
            <Mashup />
          </Route>
          <Redirect from="/" to="/up"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

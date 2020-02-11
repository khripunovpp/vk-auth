import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageController from "./components/PageController.js";
import AuthController from "./components/AuthController.js";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PageController}></Route>
        <Route path="/auth" exact component={AuthController}></Route>
      </Switch>
    </Router>
  );
};

export default App;

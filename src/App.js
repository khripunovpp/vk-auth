import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./components/Page.js";
import AuthController from "./components/AuthController.js";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Page}></Route>
        <Route path="/auth" exact component={AuthController}></Route>
      </Switch>
    </Router>
  );
};

export default App;

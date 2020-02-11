import React from "react";
import login from "../store/actions/login.js";
import { connect } from "react-redux";
import Panel from "./Panel.js";
import Button from "./Button.js";

const WelcomePage = ({ login }) => (
  <Panel>
    <h1 className="panel__title">Hi there, signin to continue</h1>
    <Button onClick={login} sign="Login" />
  </Panel>
);

const mapDispatchToProps = {
  login
};

export default connect(null, mapDispatchToProps)(WelcomePage);

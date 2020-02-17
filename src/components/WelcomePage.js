import React, { Fragment } from "react";
import login from "../store/actions/login.js";
import { useDispatch } from "react-redux";
import Panel from "./Panel.js";
import Button from "./Button.js";
import Header from "./Header.js";
import MainSection from "./MainSection.js";

const WelcomePage = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Header/>
      <MainSection>
        <Panel>
          <h1 className="panel__title">Hi there, signin to continue</h1>
          <Button onClick={() => dispatch(login())} sign="Login" />
        </Panel>
      </MainSection>
    </Fragment>
  );
};

export default WelcomePage;

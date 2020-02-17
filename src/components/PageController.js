import React, { useEffect, useMemo } from "react";
import WelcomePage from "./WelcomePage.js";
import LoggedInPage from "./LoggedInPage.js";
import { connect, useDispatch } from "react-redux";
import { getAuthState } from "../store/selects.js";
import checkSession from "../store/actions/checkSession.js";

const Page = ({ isLoggedIn }) => {
  const dispatch = useDispatch();

  const pageTpl = useMemo(
    () => (isLoggedIn ? <LoggedInPage /> : <WelcomePage />),
    [isLoggedIn]
  );

  useEffect(() => {
    dispatch(checkSession());
  }, [isLoggedIn]);

  return <div className="App">{pageTpl}</div>;
};

const mapStateToProps = state => {
  const { login } = getAuthState(state);
  return { isLoggedIn: login };
};

export default connect(mapStateToProps)(Page);

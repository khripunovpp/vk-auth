import React, { Fragment, useState, useEffect } from "react";
import setToken from "../store/actions/setToken.js";
import { connect } from "react-redux";
import logout from "../store/actions/logout.js";

const redirectHome = () => (window.location = "./");

function WelcomePage({ location, setToken, logout }) {
  const [accessError, setAccessError] = useState(false);

  const queryString = location.hash.slice(1);

  const setTokenToStore = q => {
    setToken(q).then(() => redirectHome());
  };

  useEffect(() => {
    accessError && logout().then(() => redirectHome());
  }, [accessError]);

  useEffect(() => {
    queryString.includes("token")
      ? setTokenToStore(queryString)
      : setAccessError(true);
  });

  return <Fragment>{accessError && <h1>Error</h1>}</Fragment>;
}

const mapDispatchToProps = {
  setToken,
  logout
};
export default connect(null, mapDispatchToProps)(WelcomePage);

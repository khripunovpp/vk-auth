import React, { Fragment, useState, useEffect, useCallback } from "react";
import setToken from "../store/actions/setToken.js";
import { useDispatch } from "react-redux";
import logout from "../store/actions/logout.js";

const redirectHome = () => (window.location = "./");

function WelcomePage({ location }) {
  const [accessError, setAccessError] = useState(false);

  const queryString = location.hash.slice(1);

  const dispatch = useDispatch();

  const setTokenToStore = q => {
    dispatch(setToken(q)).then(() => redirectHome());
  };

  useEffect(() => {
    if (accessError) {
      dispatch(logout).then(() => redirectHome());
    }
  }, [accessError]);

  useEffect(() => {
    queryString.includes("token")
      ? setTokenToStore(queryString)
      : setAccessError(true);
  });

  return <Fragment>{accessError && <h1>Error</h1>}</Fragment>;
}

export default WelcomePage;

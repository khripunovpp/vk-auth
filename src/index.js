import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import auth from "./store/reducers/auth.js";
import user from "./store/reducers/user.js";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  auth,
  user
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

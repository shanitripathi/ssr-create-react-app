import React from "react";
import "babel-polyfill";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Routes from "./Routes";
import createStore from "./store";

const store = createStore();

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);

import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "./state/configure.store";
import { Provider } from "react-redux";
import GlobalStyles from "../src/styles/global.styles";

render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem("notesAppState")
  ? JSON.parse(localStorage.getItem("notesAppState"))
  : {};

console.log(persistedState);

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("notesAppState", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

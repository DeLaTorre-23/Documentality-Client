import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { devToolsEnhancer } from "redux-devtools-extension";

import "bootstrap/dist/css/bootstrap.min.css"; //for bootstrap

import MainView from "./components/MainView/MainView";
import documentariesApp from "./reducers/reducers";

// Import statement to indicate that you need to bundle  `./index.scss`
import "./index.scss";

const documentalityStore = createStore(documentariesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
class DocumentalityApplication extends React.Component {
  render() {
    return (
      <Provider store={documentalityStore}>
        <MainView />
      </Provider>
    );
  }
}

// Find the root of your app
const container = document.getElementsByClassName("mainWrap")[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(DocumentalityApplication), container);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap

import { MainView } from './components/MainView/MainView';
import Container from 'react-bootstrap/Container';

// Import statement to indicate that you need to bundle  `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class DocumentalityApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Find the root of your app
const container = document.getElementsByClassName('mainWrap')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(DocumentalityApplication), container);
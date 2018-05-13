import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import config from './config';
import './App.css';

firebase.initializeApp(config);
const auth = firebase.auth();

class App extends Component {
  render() {
    return <div>hi</div>;
  }
}

export default App;

import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import config from './config';
import './App.css';

firebase.initializeApp(config);
const auth = firebase.auth();

class App extends Component {
  state = {
    loggedIn: false,
    isNewUser: null,
    uid: '',
    refreshToken: '',
  };
  login = async () => {
    const resp = await auth.signInAnonymously();
    console.log(resp);
    const { isNewUser } = resp.additionalUserInfo;
    const { uid, refreshToken } = resp.user;
    this.setState({
      loggedIn: true,
      isNewUser,
      uid,
      refreshToken,
    });
  };
  logout = async () => {
    const resp = await auth.signOut();
    console.log(resp);
    this.setState({
      loggedIn: false,
    });
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <div>
          <button onClick={() => this.login()}>LOGIN</button>
          <button onClick={() => this.logout()}>LOGOUT</button>
        </div>
        <p>
          <a href="https://enigmatic-everglades-92240.herokuapp.com/">visit site</a>
        </p>
        {this.state.loggedIn && (
          <React.Fragment>
            <p>uid: {this.state.uid}</p>
            <p>isNewUser: {this.state.isNewUser ? 'YES' : 'NO'}</p>
            <p>refreshToken: {this.state.refreshToken}</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default App;

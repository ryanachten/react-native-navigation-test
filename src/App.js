import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Router from './Router';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {

  componentWillMount() {
      const config = {
        apiKey: 'AIzaSyDGBmN8fRymZYA_dkAFSsR12W9lzjc40tg',
        authDomain: 'manager-98439.firebaseapp.com',
        databaseURL: 'https://manager-98439.firebaseio.com',
        projectId: 'manager-98439',
        storageBucket: 'manager-98439.appspot.com',
        messagingSenderId: '179190179577'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

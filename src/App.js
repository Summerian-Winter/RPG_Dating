import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import Router from './Router';

const config = {
  apiKey: 'AIzaSyCj8wza83G5pDCdkyooAWzdeZ80R6PD2c4',
  authDomain: 'authentication-765c8.firebaseapp.com',
  databaseURL: 'https://authentication-765c8.firebaseio.com',
  projectId: 'authentication-765c8',
  storageBucket: '',
  messagingSenderId: '497278955986',
  appId: '1:497278955986:web:d91c7458293b939cc4180b',
  measurementId: 'G-N36Q4ZXRP9',
};

class App extends Component {
  componentDidMount() {
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;

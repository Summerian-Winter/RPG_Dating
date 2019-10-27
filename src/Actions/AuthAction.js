import {
  SET_CURRENT_USER,
  GET_ERRORS,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from './types';
// import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken';

const API = 'https://polar-savannah-91054.herokuapp.com/';

/*
................... (      Async Storage function begin       ) ............................
*/

async function _onValueChange(item, selectedValue) {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}
/*
................... (      Storage function end       ) ............................
*/

export const loginUser = userData => dispatch => {
  axios
    .post(`${API}api/users/login`, userData)
    .then(res => {
      Actions.main();
      // SAve to localstorage
      const {token} = res.data;
      //Save token to ls
      _onValueChange('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // decode token
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
      console.log(`the decoded is ${decoded}`);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// set Current User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

// export const loginUser = ({email, password}) => {
//   return dispatch => {
//     dispatch({type: LOGIN_USER});

//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(user => {
//         dispatch({type: LOGIN_USER_SUCCESS, payload: user});
//         Actions.main();
//       })
//       .catch(error => dispatch({type: LOGIN_USER_FAILED, payload: error}));
//   };
// };

// export const registerUser = ({email, password}) => {
//   return dispatch => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(user => dispatch({type: LOGIN_USER_SUCCESS, payload: user}))
//       .catch(error => dispatch({type: LOGIN_USER_FAILED, payload: error}));
//   };
// };

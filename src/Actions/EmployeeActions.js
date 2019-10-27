import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const createEmployee = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.employeeList({type: 'reset'});
      }); // type reset prevents the page from having a back button
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      }); // firebase.on is always listening and  so must return values multiple times and so it cannot be used wiht async and await methods, it does not return a promise, to get a promise use firebase.once
  };
};

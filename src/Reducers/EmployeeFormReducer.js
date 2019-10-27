import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../Actions/types';

const INITIAL_STATE = {name: '', phone: '', shift: ''};

const EmployeeFormReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value}; //Key interpolation used here
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default EmployeeFormReducer;

import EMPLOYEE_FETCH_SUCCESS from '../Actions/types';

const INITIAL_STATE = {};

const EmployeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      console.log(action);
      return {...state, hello: 123};
    default:
      return state;
  }
};

export default EmployeeReducer;

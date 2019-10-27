import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import EmployeeList from './Components/EmployeeList';
import EmployeeCreate from './Components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene ket="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            onEnter
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="List of Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

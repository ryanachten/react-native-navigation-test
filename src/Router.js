import React from 'react';
import { Actions, Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Scene hideNavBar key="root">
      <Stack key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Stack>
      <Stack key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
      </Stack>
    </Scene>
  </Router>
);

export default RouterComponent;

import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene hideNavBar key="root">
      <Stack key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Stack>
      <Stack key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Stack>
    </Scene>
  </Router>
);

export default RouterComponent;

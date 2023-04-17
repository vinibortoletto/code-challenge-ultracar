import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { EmployeeLogin } from '../page/';

const Routes = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => <Redirect to={'/employee/login'} />}
      />
      <Route exact path="/employee/login" component={EmployeeLogin} />
    </>
  );
};

export default Routes;

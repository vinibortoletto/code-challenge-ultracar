import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { EmployeeArea, EmployeeLogin, ServiceList } from '../page/';

const Routes = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => <Redirect to={'/employee/login'} />}
      />
      <Route exact path="/employee/login" component={EmployeeLogin} />
      <Route exact path="/employee/area" component={EmployeeArea} />
      <Route exact path="/employee/service/all" component={ServiceList} />
    </>
  );
};

export default Routes;

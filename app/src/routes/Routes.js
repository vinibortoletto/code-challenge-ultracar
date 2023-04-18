import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { EmployeeArea, EmployeeLogin, NewService, ServiceList } from '../page/';
import QrCode from '../page/QrCode/QrCode';

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
      <Route exact path="/employee/service/new" component={NewService} />
      <Route exact path="/employee/service/new/qrcode" component={QrCode} />
    </>
  );
};

export default Routes;

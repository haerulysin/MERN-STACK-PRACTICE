import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './views/Login';
import RegisterPage from './views/Register';
import Dashboard from './views/Dashboard';
const MyRoutes = () => (
    <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
);

export default MyRoutes;

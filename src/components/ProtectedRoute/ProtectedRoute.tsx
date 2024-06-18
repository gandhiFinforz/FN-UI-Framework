import React, { ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthService from './../../services/AuthService';

interface ProtectedRouteProps extends RouteProps {
    component: ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
);

export default ProtectedRoute;

import React, { Component } from 'react';
import  {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render = {props => {
                if (token) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to = '/users/login'/>;
                }
            }
        }
        />
    );
};

export default PrivateRoute;
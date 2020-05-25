import React, { Component } from 'react';
import  {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            redner = {props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to = "/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;
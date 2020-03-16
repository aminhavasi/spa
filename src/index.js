import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import App from './App';
import NotFound from './components/common/redirect';
import Login from './components/login';
import Dashboard from './components/admin/dashborad';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                path="/login"
                // render={() => {
                //     if (localStorage.getItem('token')) {
                //         return <Redirect to="/admin" />;
                //     } else {
                //         return <Login />;
                //     }
                // }}
                component={() => {
                    if (localStorage.getItem('token')) {
                        return <Redirect to="/admin" />;
                    } else {
                        return <Login />;
                    }
                }}
            />
            <Route
                path="/admin"
                render={() => {
                    if (localStorage.getItem('token')) {
                        return <Dashboard />;
                    } else {
                        return <Redirect to="/" />;
                    }
                }}
            />

            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={App} />
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

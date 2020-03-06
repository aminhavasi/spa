import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./components/common/redirect";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={App} />
            <Redirect to="/not-found" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

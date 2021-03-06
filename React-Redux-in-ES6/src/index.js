/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";
import {Provider} from "react-redux";
import ConfigureStoreFunc from "./store/configureStore";
import { Router, browserHistory } from "react-router";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = ConfigureStoreFunc();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
    document.getElementById("app")
);

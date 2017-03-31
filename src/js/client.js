import React from "react";
import ReactDom from "react-dom";

import Layout from "./pages/Layout"
import Features from "./pages/Todos";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import { Router, Route, IndexRoute, hashHistory} from "react-router";



const app =document.getElementById('root');

ReactDom.render(<Router history={hashHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Dashboard}></IndexRoute>
                        <Route path="dashboard" component={Dashboard}></Route>
                        <Route path="settings" component={Settings}></Route>
                        <Route path="features" component={Features}></Route>
                    </Route>
                </Router>
                ,app);
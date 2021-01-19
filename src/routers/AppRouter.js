import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRouter} />
                </Switch>
            </Router>
        </div>
    )
};
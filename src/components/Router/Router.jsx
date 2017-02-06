import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Sustancias from '../Sustancias';
import Users from '../Users';
import NotFound from '../NotFound';

const MyRouter = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={NotFound} />
            <Route path="sustancias" component={Sustancias}/>
            <Route path="usuarios" component={Users} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default MyRouter;
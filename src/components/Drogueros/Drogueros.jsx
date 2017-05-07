import React from 'react';
import { Route, Switch } from 'react-router-dom'
import MainPage from '../MainPage';
import List from './List'
import Show from './Show'

const Drogueros = ({ children }) => (
    <MainPage title="Drogueros">
        <Switch>
            <Route path="/drogueros/:drogueroId" component={Show}/>
            <Route path="/drogueros" component={List}/>
        </Switch>
    </MainPage>
);

export default Drogueros;

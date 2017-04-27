import React from 'react';
import { Route } from 'react-router-dom'
import MainPage from '../MainPage';
import List from './List'
import Show from './Show'

const Drogueros = ({ children }) => (
    <MainPage title="Drogueros">
        <Route exact path="/drogueros/" component={List}/>
        <Route path="/drogueros/:drogueroId" component={Show}/>
    </MainPage>
);

export default Drogueros;

import React from 'react';
import MainPage from '../MainPage';
import list from './List';

const Sustancias = () => (
    <MainPage title="Sustancias">
        { list() }
    </MainPage>
);

export default Sustancias;

import React from 'react';
import MainPage from '../MainPage';
import UserList from './UserList';

const Users = () => (
    <MainPage title="Usuarios">
        { UserList() }
    </MainPage>
);

export default Users;

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import UserList from './UserList';
import './Users.css';

const Users = () => (
    <users>
        <header>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Usuarios" />
                </ToolbarGroup>
            </Toolbar>
        </header>
        <content>
            {UserList()}
        </content>
    </users>
);

export default Users;

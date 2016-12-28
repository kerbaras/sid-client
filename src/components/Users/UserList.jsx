import React from 'react';
import { Card,  CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import IconEdit from 'material-ui/svg-icons/content/create';

const Panel = () => (
    <Card style={{ margin: '0 16px 0 0', flex: '2 0 auto' }}>
        <CardText style={{ padding:0 }}>
            <List>
                <ListItem primaryText="Todos los Contactos"/>
                <ListItem primaryText="Administradores"/>
                <ListItem primaryText="Encargados"/>
                <ListItem primaryText="Otros"/>
            </List>
        </CardText>
    </Card>
);

const tools = ( user ) => [
 <IconButton key="edit"><IconEdit /></IconButton> 
];

const tableEntry = (user) => (
    <TableRow key={user.id}>
        <TableRowColumn>{user.name}</TableRowColumn>
        <TableRowColumn>{user.status}</TableRowColumn>
        <TableRowColumn>{tools(user)}</TableRowColumn>
    </TableRow>
);

const user = (id, name, status) => ({id, name, status});
let users = [
    user(1, "Matias Pierobon", "Administrador"),
    user(2, "John Doe", "Responsable"),
    user(3, "Chelsea Otakan", "Responsable"),
    user(4, "Eric Hoffman", "Usuario"),
    user(5, "James Anderson", "Usuario"),
    user(6, "Kerem Suer", "Usuario"),
    user(7, "Matias Pierobon", "Administrador"),
    user(8, "John Doe", "Responsable"),
    user(9, "Chelsea Otakan", "Responsable"),
    user(10, "Eric Hoffman", "Usuario"),
    user(11, "James Anderson", "Usuario"),
    user(12, "Kerem Suer", "Usuario")
]

const constructBody = () => users.map(user => tableEntry(user));

const UserTable = () => (
            <Card>
                <CardText>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Rank</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        { constructBody() }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

const UserList = () => [<Panel key="panel"/>, <UserTable key="table" />];

export default UserList;

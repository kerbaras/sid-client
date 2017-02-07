import React from 'react';
import { Card,  CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconEdit from 'material-ui/svg-icons/content/create';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import { NewDialog } from '../Dialogs';
import NewForm from './NewForm';

const Panel = () => (
    <Card style={{ margin: '0 16px 16px 0', flex: '1 2 0' }}>
        <CardText style={{ padding:0 }}>
            <List>
                <ListItem primaryText="Todos los Usuarios"/>
                <ListItem primaryText="Administradores"/>
                <ListItem primaryText="Responsables"/>
                <ListItem primaryText="Usuarios"/>
            </List>
        </CardText>
    </Card>
);

const MoreMenu = ({ user }) => (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      desktop={true}
    >
      <MenuItem primaryText="Eliminar" leftIcon={<IconDelete />} />
      <Divider />
      <MenuItem primaryText="Administrador" rightIcon={ user.status === "Administrador" ? <IconCheck /> : undefined} />
      <MenuItem primaryText="Responsable" rightIcon={ user.status === "Responsable" ? <IconCheck /> : undefined} />
      <MenuItem primaryText="Usuario" rightIcon={ user.status === "Usuario" ? <IconCheck /> : undefined} />
    </IconMenu>
);

const tools = ( user ) => [
 <IconButton key="edit"><IconEdit /></IconButton> ,
 <MoreMenu key="more" user={user} />
];

const tableEntry = (user) => (
    <TableRow key={user.id}>
        <TableRowColumn>{user.name}</TableRowColumn>
        <TableRowColumn>{user.status}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(user)}</TableRowColumn>
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
            <Card style={{ marginRight: '16px', minWidth: '445px', flex:'2 0'}}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableBody>
                        { constructBody() }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

const AddButton = () => (
    <NewDialog title="Crear Usuario">
        <NewForm />
    </NewDialog>
);

const UserList = () => [<Panel key="panel"/>, <UserTable key="table" />, <AddButton key="new" />];

export default UserList;

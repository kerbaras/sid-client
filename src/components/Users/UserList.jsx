import React from 'react';
import _ from 'lodash';
import { Card,  CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
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
      <MenuItem primaryText="Usuario" rightIcon={ user.status === "Usuario" ? <IconCheck /> : undefined} />
    </IconMenu>
);

const tools = ( user ) => [
 <IconButton key="edit"><IconEdit /></IconButton> ,
 <MoreMenu key="more" user={user} />
];

const tableEntry = (user, key) => (
    <TableRow key={key}>
        <TableRowColumn>{ user.apellido + ', ' + user.nombre }</TableRowColumn>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(user)}</TableRowColumn>
    </TableRow>
);

const constructBody = (users) => _.map(users, (user,key) => tableEntry(user, key));

const UserTable = ({users}) => (
            <Card style={{ marginRight: '16px', minWidth: '445px', flex:'2 0'}}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Nombre y Apellido</TableHeaderColumn>
                                <TableHeaderColumn>username</TableHeaderColumn>
                                <TableHeaderColumn>Opciones</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        { constructBody(users) }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

const AddButton = ({ handleSubmit, handleChange, data}) => (
    <NewDialog handleSubmit={handleSubmit} title="Crear Usuario">
        <NewForm handleChange={handleChange} data={data} />
    </NewDialog>
);

const UserList = (users, handlerNew, handleChange, state) => [
    <Panel key="panel"/>,
    <UserTable key="table" users={users}/>,
    <AddButton key="new" handleSubmit={handlerNew} handleChange={handleChange} data={state}/>
];

export default UserList;

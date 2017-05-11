import React from 'react';
import _ from 'lodash';
import { Card,  CardText } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import IconEdit from 'material-ui/svg-icons/content/create';
import { NewDialog } from '../Dialogs';
import NewForm from './NewForm';

const tools = ( user ) => [
 <IconButton key="edit"><IconEdit /></IconButton>
];

const tableEntry = (user, key) => (
    <TableRow key={key}>
        <TableRowColumn>{ user.apellido + ', ' + user.nombre }</TableRowColumn>
        <TableRowColumn>{user.username}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
        <TableRowColumn>{(new Date(user.fecha.date)).toLocaleDateString('es')}</TableRowColumn>
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
                                <TableHeaderColumn>Usuario</TableHeaderColumn>
                                <TableHeaderColumn>Correo</TableHeaderColumn>
                                <TableHeaderColumn>Fecha</TableHeaderColumn>
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

const UserList = ({users, handlerNew, handleChange, state}) => (
    <users>
        <UserTable key="table" users={users}/>
        <AddButton key="new" handleSubmit={handlerNew} handleChange={handleChange} data={state}/>
    </users>
);

export default UserList;

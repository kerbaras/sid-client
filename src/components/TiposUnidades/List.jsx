import React from 'react';
import _ from 'lodash';
import { Card,  CardText } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import IconEdit from 'material-ui/svg-icons/content/create';
import { NewDialog } from '../Dialogs';
import NewForm from './NewForm';

const tools = ( unidad ) => [
 <IconButton key="edit"><IconEdit /></IconButton>
];

const tableEntry = (unidad, key) => (
    <TableRow key={key}>
        <TableRowColumn>{unidad.nombre }</TableRowColumn>
        <TableRowColumn>{unidad.detalle}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(unidad)}</TableRowColumn>
    </TableRow>
);

const constructBody = (unidades) => _.map(unidades, (unidad,key) => tableEntry(unidad, key));

const UnidadTable = ({unidades}) => (
            <Card style={{ marginRight: '16px', minWidth: '445px', flex:'2 0'}}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Nombre</TableHeaderColumn>
                                <TableHeaderColumn>Detalle</TableHeaderColumn>
                                <TableHeaderColumn>Opciones</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        { constructBody(unidades) }
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

const UserList = (unidades, handlerNew, handleChange, state) => [
    <UnidadTable key="table" unidades={unidades}/>,
    <AddButton key="new" handleSubmit={handlerNew} handleChange={handleChange} data={state}/>
];

export default UserList;

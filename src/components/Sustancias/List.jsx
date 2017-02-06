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
import NewDialog from '../Users/NewDialog';

const MoreMenu = ({ sustancia }) => (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      desktop={true}
    >
      <MenuItem primaryText="Eliminar" leftIcon={<IconDelete />} />
    </IconMenu>
);

const tools = ( sustancia ) => [
 <IconButton key="edit"><IconEdit /></IconButton> ,
 <MoreMenu key="more" sustancia={sustancia} />
];

const tableEntry = (sustancia) => (
    <TableRow key={sustancia.id}>
        <TableRowColumn>{sustancia.name}</TableRowColumn>
        <TableRowColumn>{sustancia.status}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(sustancia)}</TableRowColumn>
    </TableRow>
);

const sustancia = (id, formula, name, cas, sedronar, renar) => ({id, formula, name, cas, sedronar, renar});
let sustancias = [
    sustancia(1, "Matias Pierobon", "Administrador"),
    sustancia(2, "John Doe", "Responsable"),
    sustancia(3, "Chelsea Otakan", "Responsable"),
    sustancia(4, "Eric Hoffman", "Usuario"),
    sustancia(5, "James Anderson", "Usuario"),
    sustancia(6, "Kerem Suer", "Usuario"),
    sustancia(7, "Matias Pierobon", "Administrador"),
    sustancia(8, "John Doe", "Responsable"),
    sustancia(9, "Chelsea Otakan", "Responsable"),
    sustancia(10, "Eric Hoffman", "Usuario"),
    sustancia(11, "James Anderson", "Usuario"),
    sustancia(12, "Kerem Suer", "Usuario")
]

const constructBody = () => sustancias.map(sustancia => tableEntry(sustancia));

const SustanciasTable = () => (
            <Card style={{ marginRight: '24px', minWidth: '445px', flex:'2 0'}}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableBody>
                        { constructBody() }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

const SustanciasList = () => [<SustanciasTable key="table" />, <NewDialog key="new" />];

export default SustanciasList;

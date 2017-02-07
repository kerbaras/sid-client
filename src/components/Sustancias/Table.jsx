import React from 'react';
import { Card,  CardText } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

const tableEntry = (sustancia, tools) => (
    <TableRow key={sustancia.id}>
        <TableRowColumn>{sustancia.formula}</TableRowColumn>
        <TableRowColumn>{sustancia.name}</TableRowColumn>
        <TableRowColumn>{sustancia.cas}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(sustancia)}</TableRowColumn>
    </TableRow>
);

const constructBody = (sustancias, tools) => sustancias.map(sustancia => tableEntry(sustancia, tools));

const SustanciasTable = ({ sustancias, style, tools }) => (
            <Card style={style}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableBody>
                        { constructBody(sustancias, tools) }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

export default SustanciasTable;

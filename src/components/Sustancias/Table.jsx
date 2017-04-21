import React from 'react';
import _ from 'lodash';
import { Card,  CardText } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import { Context as MjContext, Node as MjNode} from 'react-mathjax';

const tableEntry = (sustancia, key, tools) => (
    <TableRow key={key}>
        <TableRowColumn>
            <MjContext><MjNode inline>{sustancia.formula}</MjNode></MjContext>
        </TableRowColumn>
        <TableRowColumn>{sustancia.nombre}</TableRowColumn>
        <TableRowColumn>{sustancia.cas}</TableRowColumn>
        <TableRowColumn style={{ textAlign:'right' }}>{tools(sustancia)}</TableRowColumn>
    </TableRow>
);

const constructBody = (sustancias, tools) => _.map(sustancias, (sustancia,key) => tableEntry(sustancia, key, tools));

const SustanciasTable = ({ sustancias, style, tools }) => (
            <Card style={style}>
                <CardText>
                    <Table multiSelectable={true}>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Formula</TableHeaderColumn>
                                <TableHeaderColumn>Nombre</TableHeaderColumn>
                                <TableHeaderColumn>Cas</TableHeaderColumn>
                                <TableHeaderColumn>Tools</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        { constructBody(sustancias, tools) }
                        </TableBody>
                    </Table>
                </CardText>
            </Card>
);

export default SustanciasTable;

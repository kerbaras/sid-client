import React from 'react';
import _ from 'lodash';
import { Card,  CardText } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import IconEdit from 'material-ui/svg-icons/content/create';
import { NewDialog } from '../Dialogs';
import NewForm from './NewForm';
import { getResource, postResource } from '../../libs/api'

const tools = ( user ) => [
 <IconButton key="edit"><IconEdit /></IconButton>
];

const tableEntry = (user, key) => (
    <TableRow key={key}>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn></TableRowColumn>
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

 class UserList extends React.Component {

     constructor(props){
         super(props)
         this.state = {
             accesos: [],
             userId: null,
             id: 0
         }
     }

     componentDidMount(){
        this.getAccesos()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.setState({ id: nextProps.match.params.drogueroId})
        this.getAccesos()
    }

     getAccesos = () => 
        getResource(`drogueros/${this.state.id}/usuarios/`).then(response => this.setState({ accesos: response.data.data }))
     
    render  = ({users, handlerNew, handleChange, state}) => (
        <users>
            <h1> Usuarios </h1>
            <UserTable key="table" users={this.state.accesos}/>
            <AddButton key="new" handleSubmit={this.handlerNew} handleChange={this.handleChange} data={this.state}/>
        </users>
    )
 }

export default UserList;

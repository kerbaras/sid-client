import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import AccountIcon from 'material-ui/svg-icons/social/person';
import { NewDialog } from '../Dialogs';
import { Row } from '../Utilis';
import NewForm from './NewForm';
import db from '../../libs/db.js'

const droguero = (id, unidadEjecutora, responsable, numero, imagen) => (
    {
        id,
        unidadEjecutora,
        responsable,
        numero,
        imagen
    }
);
const user = (name, status, image) => ({name, status, image});

let drogueros = [
    droguero(1, "Laboratorio1", user("John Doe", "Responsable"), "1202-6"),
    droguero(2, "Introducción a la Química", user("Chelsea Otakan", "Responsable", "http://www.material-ui.com/images/jsa-128.jpg"), "2739-7", "http://www.material-ui.com/images/nature-600-337.jpg"),
    droguero(3, "Grupo de José", user("Chelsea Otakan", "Responsable"), "7785-2"),
    droguero(4, "Laboratorio LIDI", user("Matías Pierobon", "Administrador"), "7783-8")
];

const makeImage = image => image ? <CardMedia expandable={true}><img src={image} alt="" /></CardMedia> : null;
const makeAvatar = image => image || <Avatar icon={<AccountIcon  />} />;

const cardEntry = (droguero, key) => (
    <Card key={key} style={{ margin:'8px', maxWidth:'400px' }}>
    <CardHeader
      title={ droguero.responsable.name }
      subtitle={ droguero.responsable.status }
      avatar={ makeAvatar(droguero.responsable.image) }
      actAsExpander={Boolean(droguero.imagen)}
      showExpandableButton={Boolean(droguero.imagen)}
    />
    { makeImage(droguero.imagen) }
    <CardTitle title={"Droguero " + droguero.numero} subtitle={droguero.unidadEjecutora}/>
    <CardActions>
      <Link to={"/drogueros/" + droguero.id}><FlatButton label="Ver" /></Link>
    </CardActions>
  </Card>
);

const constructList = (drogueros) => _.map(drogueros, (droguero,key) => cardEntry(droguero, key));

const Lista = ({drogueros}) => (
            <Row style={{ marginRight: '24px', minWidth: '445px', flex:'2 0'}}>
                { constructList(drogueros) }
            </Row>
);

const AddButton = ({data, handleChange, handleSubmit, unidades, usuarios}) => (
    <NewDialog handleSubmit={handleSubmit} title="Agregar droguero">
        <NewForm data={data} handleChange={handleChange} usuarios={usuarios} unidades={unidades} />
    </NewDialog>
);

const ListaDroguero = ({drogueros, usuarios, unidades, handleChange, handleSubmit, data}) => (
    <list>
        <Lista key="table" drogueros={drogueros} usuarios={usuarios} unidades={unidades} />
        <AddButton key="new" usuarios={usuarios} unidades={unidades} handleChange={handleChange} handleSubmit={handleSubmit} data={data} />
    </list>
);

class DroguerosList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            drogueros:{},
            unidades: {},
            usuarios: {},
            nombre: "",
            alias: "",
            unidad: -1,
            responsable: -1
        }
    }

    componentDidMount(){
        db.child('unidades').on('value', snap => this.setState({ unidades: snap.val() }))
        db.child('drogueros').on('value', snap => this.setState({ drogueros: snap.val() }))
        db.child('usuarios').on('value', snap => this.setState({ usuarios: snap.val() }))
    }

    addDroguero = () =>{
        let droguero = {
            nombre: this.state.nombre,
            alias: this.state.alias,
            unidad: this.state.unidad,
            responsable: this.state.responsable
        }

        db.child('droguero').push(droguero)
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    render = () => (
        <drogueros style={{ width: '100%' }}>
            <ListaDroguero 
                drogueros={this.state.drogueros}
                usuarios={this.state.usuarios}
                unidades={this.stateunidades}
                data={this.state}
                handleSubmit={this.addDroguero}
                handleChange={this.handleChange}/>
        </drogueros>
    );
}

export default DroguerosList;

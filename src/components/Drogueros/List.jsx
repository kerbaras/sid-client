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
import { getResource, postResource } from '../../libs/api'

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
            drogueros:[],
            nombre: "",
            detalle: "",
            unidad: '',
            responsable: ''
        }
    }

    componentDidMount(){
        this.getDrogueros()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getDrogueros()
    }

    getDrogueros = () => 
        getResource('drogueros/').then(response => this.setState({ drogueros: response.data.data }))

    addDroguero = () =>{
        let droguero = {
            nombre: this.state.nombre,
            detalle: this.state.detalle,
            unidad: this.state.unidad,
            responsable: this.state.responsable
        }

        postResource('drogueros/', { ...droguero }).then(this.getDrogueros())
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
                data={this.state}
                handleSubmit={this.addDroguero}
                handleChange={this.handleChange}/>
        </drogueros>
    );
}

export default DroguerosList;

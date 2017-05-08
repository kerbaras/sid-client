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

const makeImage = image => image ? <CardMedia expandable={true}><img src={image} alt="" /></CardMedia> : null;
const makeAvatar = image => image || <Avatar icon={<AccountIcon  />} />;

const cardEntry = (droguero, key) => (
    <Card key={droguero.id} style={{ margin:'8px', maxWidth:'400px' }}>
    <CardHeader
      title={ `${droguero.responsable.apellido}, ${droguero.responsable.nombre}` }
      subtitle={ droguero.responsable.email }
      avatar={ makeAvatar(droguero.responsable.image) }
      actAsExpander={true}
      showExpandableButton={Boolean(droguero.imagen)}
    />
    { makeImage("http://placehold.it/10x100") }
    <CardTitle title={droguero.nombre} subtitle={droguero.unidades.map( unidad => unidad.nombre ).join(', ')}/>
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
            unidad: null,
            responsable: null 
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

    handleChange = (property, isSelect = null) => {
        if(isSelect){
            return (event, index, value) => {
                let nextState = { ...this.state };
                nextState[property] = value;
                this.setState(nextState)
            }
        }
        return event => {
            let nextState = { ...this.state };
            nextState[property] = event.target.value;
            this.setState(nextState);
        }
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

import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import { Card, CardActions, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import { SustanciasTable } from '../Sustancias'
import { FlatDialog } from '../Dialogs'
import { Row } from '../Utilis'
import { getResource, postResource } from '../../libs/api'
import UserList from './UserList'

const entry = (division) => (
    <Card key={division.id} style={{ margin:'8px', maxWidth:'400px', display:'flex', flex:'1 0 auto' }}>
        <CardTitle title={division.alias} subtitle={"(" + division.nombre + ")"} />
        <CardActions>
            <Link to={`/drogueros/${division.droguero}/${division.id}`}><FlatButton label="Ingresar" /></Link>
        </CardActions>
    </Card>
); 

const makeDivisiones = (divisiones) => divisiones.map(division => entry(division));

class Divisiones extends React.Component{

    constructor(props){
        super(props)
        this.state={
            division: null,
            nombre: null,
            detalle: null
        }
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getDivision(nextProps.division)
    }



    
    render = () => (
        <Row>
            { makeDivisiones(this.state.division.subdivisiones) }
            <Card key="new" style={{ margin:'8px', maxWidth:'400px', display:'flex', flex:'1 0 auto' }}>
                <CardTitle title="Nueva Division" />
                <CardActions>
                    <TextField floatingLabelText="Nombre" value={this.state.nombre} onChange={this.handleChange('nombre')} />
                    <TextField floatingLabelText="Detalle" value={this.state.detalle} onChange={this.handleChange('detalle')} />
                    <FlatButton label="Agregar" onTouchTap={this.onSubmit} />
                </CardActions>
            </Card>
        </Row>
    )
}

const Sustancias = ({ sustancias }) => (
    <sustancias>
        <h2>Sustancias</h2>
        <SustanciasTable sustancias={ [] } tools={() => null} />
    </sustancias>
);

class Division extends React.Component{
    
    constructor(props){
        super(props)
        let { drogueroId, divisionId } = props.match.params
        this.state = {
            id: divisionId || drogueroId,
            division: null,
            nuevoNombre: '',
            nuevoDetalle: '',
            nuevoAlias: ''
        }
        this.getDivision()
    }

    getDivision = () => 
        getResource(`drogueros/divisiones/${this.state.id}`).then(response => this.setState({ division: response.data.data }))

    componentWillReceiveProps(nextProps, nextContext){
        let { drogueroId, divisionId } = nextProps.match.params
        this.setState({ id: divisionId || drogueroId })
        this.getDivision()
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    onSubmit = () => {
        let subdivision = {
            nombre: this.state.nuevoNombre,
            detalle: this.state.nuevoDetalle,
            alias: this.state.nuevoAlias,
            division: this.state.id
        }
        postResource('drogueros/divisiones/', { ...subdivision }).then(() => this.getDivision())
    }

    makeDivisiones = () => (!this.state.division) ? null : this.state.division.subdivisiones.map(division => entry(division))

    createPath = () => this.state.division.path.map( div => <Link key={div.id} to={`/drogueros/${div.droguero}/${div.id}`}>{ div.nombre } / </Link> )

    render = () => this.state.division === null ? null : (
        <division style={{ width: '100%' }}>
            <h3> { this.createPath() } </h3>
            <h2> Subdivisiones </h2>
            <Row>
                <Card key="new" style={{ margin:'8px', maxWidth:'400px', display:'flex', flex:'1 0 auto' }}>
                    <CardTitle title="Nueva Division" />
                    <CardActions>
                        <TextField floatingLabelText="Nombre" value={this.state.nuevoNombre} onChange={this.handleChange('nuevoNombre')} />
                        <TextField floatingLabelText="Alias" value={this.state.nuevoAlias} onChange={this.handleChange('nuevoAlias')} />
                        <TextField floatingLabelText="Detalle" value={this.state.nuevoDetalle} onChange={this.handleChange('nuevoDetalle')} />
                        <FlatButton label="Agregar" onTouchTap={()=>this.onSubmit()}/>
                    </CardActions>
                </Card>
                { this.makeDivisiones() }
            </Row>
            <Sustancias/>
        </division>
    )
}


class Droguero extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            droguero: null,
        }
    }
    
    componentDidMount(){
        this.getDroguero(this.props.match.params.drogueroId)
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getDroguero(nextProps.match.params.drogueroId)
    }

    getDroguero = (id) =>
        getResource(`drogueros/${id}`)
            .then(response => this.setState({ droguero: response.data.data }))
            .catch( response => {
                this.setState({ droguero: null, error: true })
            })

    render = () => {
        if(this.state.droguero != null) { return (
        <droguero style={{ width: '100%' }}>
            <h1>
                { this.state.droguero.nombre }
            </h1>

            <Switch>
                <Route path={`/drogueros/:drogueroId/usuarios`} component={UserList} />
                <Route path={`/drogueros/:drogueroId/:divisionId?`} component={Division} /> 
            </Switch>
        </droguero>
    )} else if (this.state.error === true){
        return (<h1>No tiene permisos para ver este droguero</h1>)
    } else { 
        return null
    }}
}

export default Droguero;
import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { getResource, postResource } from '../../libs/api'

class ShowComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            unidad: null,
            usuarios: [],
            usuario: null
        }
    }

    componentDidMount(){
        this.getUnidad(this.props.match.params.idunidad)
        this.getUsuarios()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUnidad(nextProps.match.params.user)
        this.getUsuarios()
    }

    getUnidad = (id) =>
        getResource(`unidades/${id}`).then(response => this.setState({ unidad: response.data.data }))

    getUsuarios = () => 
        getResource(`usuarios/`).then(response => this.setState({ usuarios: response.data.data }))
    
    handleChange = (event, index, value) => this.setState({usuario: value});

    listUsers = () => this.state.unidad.usuarios.map( usuario => <li>{usuario.apellido}, {usuario.nombre}</li> )

    competentUsers = () => this.state.usuarios.filter( usuario => this.state.unidad.usuarios.filter(user => user.id === usuario.id).length === 0)

    makeOptions = () => this.competentUsers().map( usuario => <MenuItem key={usuario.id} value={usuario.id} primaryText={`${usuario.apellido}, ${usuario.nombre}`} />)

    submitUser = () => 
        postResource('unidades/integrantes/', { unidad: this.state.unidad.id, usuario: this.state.usuario})
        .then(() => { 
            this.getUsuarios();
            this.getUnidad(this.state.unidad.id);
            this.setState({usuario: null})
        })
    

    render = () => (this.state.unidad === null) ? <unidad></unidad> : (
        <unidad>
            <h2> { this.state.unidad.nombre } <small>({this.state.unidad.tipo.nombre})</small></h2>
            <p> { this.state.unidad.detalle }</p>
            <ul>
                { this.listUsers() }
            </ul>
            <div>
                <SelectField floatingLabelText="Agregar Integrante" value={this.state.usuario} onChange={this.handleChange} >
                    { this.makeOptions() }
                </SelectField>
                <FlatButton label="Agregar Usuario" primary={true} onTouchTap={this.submitUser}/>   
            </div>
        </unidad>
    )
}

export default ShowComponent
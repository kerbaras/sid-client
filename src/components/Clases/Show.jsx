import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import { getResource, postResource } from '../../libs/api'

class ShowComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            clase: null,
            incompatibilidades: [],
            incompatibilidad: null
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
        getResource(`sustancias/clases/${id}`).then(response => this.setState({ clase: response.data.data }))

    getUsuarios = () => 
        getResource(`sustancias/clases/`).then(response => this.setState({ incompatibilidades: response.data.data }))
    
    handleChange = (event, index, value) => this.setState({incompatibilidad: value});

    listUsers = () => this.state.clase.incompatibilidades.map( clase => <li>{clase.nombre}, {clase.detalle}</li> )

    competentUsers = () => this.state.incompatibilidades.filter( incompatibilidad => this.state.clase.incompatibilidades.filter(clase => clase.id === incompatibilidad.id).length === 0)

    makeOptions = () => this.competentUsers().map( clase => <MenuItem key={clase.id} value={clase.id} primaryText={`${clase.nombre}, ${clase.detalle}`} />)

    submitUser = () => 
        postResource('sustancias/incompatibilidades/', { clase: this.state.unidad.id, incompatibilidad: this.state.usuario})
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
import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getResource } from '../../libs/api'

const styles = {
    row: (color) => ({
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 auto',
        flexWrap: 'wrap',
        margin: '0 -24px',
        padding: '0 12px',
        backgroundColor: color
    }),
    col: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        margin: '0 12px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto'
    }
};

const Column = ({children}) => <column style={styles.col}>{children}</column>;
const Row = ({children, color}) => <row style={styles.row(color)}>{children}</row>;


class NewForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            unidades: [],
            usuarios: []
        }
    }
    
    componentDidMount(){
        this.getUnidades()
        this.getUsuarios()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.setState({ unidad: nextProps.data.unidad, responsable: nextProps.data.responsable})
        this.getUnidades()
        this.getUsuarios()
    }

    getUnidades = () => 
        getResource('unidades/').then(response => this.setState({ unidades: response.data.data }))

    getUsuarios = () => 
        getResource('usuarios/').then(response => this.setState({ usuarios: response.data.data }))
    
    makeUnityOptions = () => this.state.unidades.map( unidad => <MenuItem key={unidad.id} value={unidad.id} primaryText={`${unidad.nombre}`} />)

    competentUsers = () => this.state.usuarios.filter( usuario => usuario.unidad.filter( unidad => unidad.id === this.state.unidad ).lenght !== -1)

    makeUserOptions = () => this.competentUsers().map( usuario => <MenuItem key={usuario.id} value={usuario.id} primaryText={`${usuario.apellido}, ${usuario.nombre}`} />)

    render = () => (
        <form style={styles.form}>
                <Row>
                    <Column><TextField floatingLabelText="Nombre" fullWidth={true} value={this.props.data.nombre} onChange={this.props.handleChange('nombre')} /></Column>
                    <Column><TextField floatingLabelText="Detalle" fullWidth={true}  value={this.props.data.detalle} onChange={this.props.handleChange('detalle')} /></Column>
                </Row>
                <Row>
                    <Column>
                        <SelectField floatingLabelText="Unidad" fullWidth={true} value={this.props.data.unidad} onChange={this.props.handleChange("unidad", true)} >
                            {this.makeUnityOptions()}
                        </SelectField>
                    </Column>
                    <Column>
                        <SelectField floatingLabelText="Responsable" fullWidth={true} value={this.props.data.responsable} onChange={this.props.handleChange("responsable", true)} >
                            {this.makeUserOptions()}
                        </SelectField>
                    </Column>
                </Row>
        </form>
    )

}

export default NewForm;

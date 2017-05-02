import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getResource, postResource } from '../../libs/api'

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

const mapped = (obj) => _.map(obj, (obj, key) => ({...obj, key}))

const createItems = (unidades) => unidades.map((unidad) => <MenuItem key={unidad.id} value={unidad.id} primaryText={unidad.nombre} />)
const createUserItems = (users) => users.map((user) => <MenuItem key={user.id} value={user.id} primaryText={user.apellido + ', ' + user.nombre} />)

const UserSelect = ({data, handleChange, users, unidad}) => (
    <SelectField
        floatingLabelText="Responsable"
        fullWidth={true}
        value={data.responsable}
        onChange={handleChange("responsable", true)}
    >{ createUserItems(users.filter( user => user.unidad.id == unidad )) }</SelectField>
)

const createUserSelect = ({data, handleChange}, unidad, usuarios) => (unidad == null) ? null : <Column><UserSelect handleChange={handleChange} data={data} users={usuarios} unidad={unidad} /></Column>


const Column = ({children}) => <column style={styles.col}>{children}</column>;
const Row = ({children, color}) => <row style={styles.row(color)}>{children}</row>;

const InputText = ({ label, value, onChange }) => <TextField floatingLabelText={ label } fullWidth={ true }  value={value} onChange={onChange} />;

class NewForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            unidades: null,
            usuarios: []
        }
    }
    
    componentDidMount(){
        this.getUnidades()
        this.getUsuarios()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUnidades()
        this.getUsuarios()
    }

    getUnidades = () => 
        getResource('unidades/').then(response => this.setState({ unidades: response.data.data }))

    getUsuarios = () => 
        getResource('usuarios/').then(response => this.setState({ usuarios: response.data.data }))

    getUsersFromUnity = (idUnidad) => {
        let { unidades } = this.state
        if(unidades === null){
            return [];
        }

        let unidad = unidades.find( unidad => unidad.id === idUnidad )
        if(!unidad || !unidad.usuarios){ 
            return [];
        }

        return unidad.usuarios
    }

    createUnityItems = () => this.state.unidades.map( unidad => <MenuItem key={unidad.id} value={unidad.id} primaryText={unidad.nombre} /> )

    makeUnitySelect = () => {
        console.log(this.state.unidades)
        if(this.state.unidades === null){
            return null;
        }
        return (
        <SelectField
            floatingLabelText="Unidad Ejecutora"
            fullWidth={true}
            value={this.props.data.unidad}
            onChange={this.props.handleChange('unidad', true)}
        > { /*this.createUnityItems()*/ } </SelectField>
    )}

    makeUserSelect = () => null
    
    render = () => {
    let {data, handleChange } = this.props
    return (
    <form style={styles.form}>
            <Row>
                <Column><InputText label="Nombre" value={data.nombre} onChange={handleChange('nombre')} /></Column>
                <Column><InputText label="Detalle" value={data.detalle} onChange={handleChange('detalle')} /></Column>
            </Row>
            <Row>
                <Column>{ this.makeUnitySelect() }</Column>
                { this.makeUserSelect() }
            </Row>
    </form>
)};

}

export default NewForm;

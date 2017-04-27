import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle'
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


const items = [
  <MenuItem key={1} value={1} primaryText="Administrador" />,
  <MenuItem key={2} value={2} primaryText="Responsable" />,
  <MenuItem key={3} value={3} primaryText="Usuario" />,
];

class NewForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            unidades:[]
        }
    }

    componentDidMount(){
        this.getUnidades()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUnidades()
    }

    getUnidades = () => 
        getResource('unidades/').then(response => this.setState({ unidades: response.data.data }))

    renderOptions = () => this.state.unidades.map( unidad => <MenuItem key={unidad.id} value={unidad.id} primaryText={unidad.nombre} />)

    render = () => {
        let { data, handleChange } = this.props
        return (
        <form style={styles.form}>
                <Row>
                    <Column><TextField floatingLabelText="Apellido" fullWidth={true} value={data.apellido} onChange={handleChange('apellido')} /></Column>
                    <Column><TextField floatingLabelText="Nombre" fullWidth={true} value={data.nombre} onChange={handleChange('nombre')} /></Column>
                </Row>
                <Row>
                    <Column><TextField floatingLabelText="Usuario" fullWidth={true} value={data.username} onChange={handleChange('username')} /></Column>
                    <Column><TextField floatingLabelText="Contraseña" fullWidth={true} type="password" value={data.password} onChange={handleChange('password')} /></Column>
                    <Column><TextField floatingLabelText="Repetir Contraseña" fullWidth={true} type="password" value={data.repeatedPasswod} onChange={handleChange('repeatedPasswod')} errorText={ data.repeatedPasswod !== data.password ? " Las Contraseñas no coinciden" : null } /></Column>
                </Row>
                <Row>
                    <Column><SelectField floatingLabelText="Unidad" fullWidth={true} value={data.unidad} onChange={handleChange('unidad', true)}> { this.renderOptions() } </SelectField></Column>
                    <Column><Toggle  label="Es Administrador" defaultToggled={false} /></Column>
                </Row>
        </form>
    )}
}

export default NewForm;
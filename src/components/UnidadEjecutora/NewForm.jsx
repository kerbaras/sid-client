import React from 'react';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
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
        this.state={
            tipos:[]
        }
    }

    componentDidMount(){
        this.getTipos()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getTipos()
    }

    getTipos = () => 
        getResource('unidades/tipos/').then(response => this.setState({ tipos: response.data.data }))

    renderOptions = () => this.state.tipos.map( tipo => <MenuItem key={tipo.id} value={tipo.id} primaryText={tipo.nombre} />)

    render = () => {
        let { data, handleChange } = this.props
        return (
        <form style={styles.form}>
                <Row>
                    <Column><TextField floatingLabelText="Nombre" fullWidth={true} value={data.nombre} onChange={handleChange('nombre')} /></Column>
                    <Column><SelectField floatingLabelText="Tipo" fullWidth={true} value={data.tipo} onChange={handleChange('tipo', true)}> { this.renderOptions()} </SelectField></Column>
                </Row>
                <Row>
                    <Column><TextField floatingLabelText="Detalle" fullWidth={true} value={data.detalle} onChange={handleChange('detalle')} /></Column>
                </Row>
        </form>
    )}
}

export default NewForm;

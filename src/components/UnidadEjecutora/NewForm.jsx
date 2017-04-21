import React from 'react';
import TextField from 'material-ui/TextField';

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

const NewForm = ({data, handleChange}) => (
        <form style={styles.form}>
                <Row>
                    <Column><TextField floatingLabelText="Nombre" fullWidth={true} value={data.nombre} onChange={handleChange('nombre')} /></Column>
                    <Column><TextField floatingLabelText="Tipo" fullWidth={true} value={data.tipo} onChange={handleChange('tipo')} /></Column>
                </Row>
                <Row>
                    <Column><TextField floatingLabelText="Detalle" fullWidth={true} value={data.detalle} onChange={handleChange('detalle')} /></Column>
                </Row>
        </form>
    );

export default NewForm;
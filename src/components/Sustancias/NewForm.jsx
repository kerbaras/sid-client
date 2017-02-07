import React from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

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

const InputText = ({ label }) => <TextField floatingLabelText={ label } fullWidth={ true } />;

const NewForm = () => (
    <form style={styles.form}>
            <Row>
                <Column><InputText label="Formula" /></Column>
                <Column><InputText label="Nombre" /></Column>
                <Column><InputText label="Número CAS" /></Column>
            </Row>
            <Row>
                <Column><InputText label="densidad" /></Column>
                <Column><InputText label="Tipo de Medida" /></Column>
            </Row>
            <Row>
                <Column><Toggle label="Requiere Sedronar" /></Column>
                <Column><Toggle label="Requiere Renar" /></Column>
            </Row>
    </form>
);

export default NewForm;
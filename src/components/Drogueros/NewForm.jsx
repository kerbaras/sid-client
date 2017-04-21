import React from 'react';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

const createItems = (unidades) => unidades.map((unidad) => <MenuItem value={unidad.key} primaryText={unidad.nombre} />)
const createUserItems = (users) => users.map((user) => <MenuItem value={user.key} primaryText={user.apellido + ', ' + user.nombre} />)

const UserSelect = ({data, handleChange, users, unidad}) => (
    <SelectField
        floatingLabelText="Unidad Ejecutora"
        value={data.responsable}
        onChange={handleChange("responsable")}
    >{ createUserItems(users.filter( users => users.unidad == unidad )) }</SelectField>
)

const createUserSelect = ({data, handleChange}, unidad, usuarios) => (unidad == -1) ? null : <Column><UserSelect handleChange={handleChange} data={data} users={usuarios} unidad={unidad} /></Column>


const Column = ({children}) => <column style={styles.col}>{children}</column>;
const Row = ({children, color}) => <row style={styles.row(color)}>{children}</row>;

const InputText = ({ label }) => <TextField floatingLabelText={ label } fullWidth={ true } />;

const NewForm = ({data, handleChange, usuarios, unidades}) => {
    console.log(mapped(unidades))
    return (
    <form style={styles.form}>
            <Row>
                <Column><InputText label="Nombre" value={data.nombre} onChange={handleChange('nombre')} /></Column>
            </Row>
            <Row>
                <Column><SelectField
                    floatingLabelText="Unidad Ejecutora"
                    value={data.unidad}
                    onChange={handleChange}
                >{ createItems(mapped(unidades)) }</SelectField></Column>
                {createUserSelect({data, handleChange}, data.unidad, mapped(usuarios))}
            </Row>
            <Row>
                <Column><Toggle label="Requiere Sedronar" /></Column>
                <Column><Toggle label="Requiere Renar" /></Column>
            </Row>
    </form>
)};

export default NewForm;
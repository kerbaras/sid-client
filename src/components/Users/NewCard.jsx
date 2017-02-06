import React from 'react';
import { Card,  CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import NewForm from './NewForm';

const styles = {
    container: {
        width: '100%'
    }
};

const Column = ({ children }) => <column style={styles.col}>{children}</column>;
const Row = ({ children }) => <row style={styles.row}>{children}</row>;

const NewDialog = () => (
    <Card style={styles.container}>
        <CardText>
            <NewForm/>
        </CardText>
        <CardActions>
          <FlatButton label="Cancelar" />
          <FlatButton label="Guardar" primary={true} />
        </CardActions>
    </Card>
);

export default NewDialog;
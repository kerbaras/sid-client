import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import AccountIcon from 'material-ui/svg-icons/social/person';
import { NewDialog } from '../Dialogs';
import { Row } from '../Utilis';
import NewForm from './NewForm';

const droguero = (id, unidadEjecutora, responsable, numero, imagen) => (
    {
        id,
        unidadEjecutora,
        responsable,
        numero,
        imagen
    }
);
let drogueros = [
    droguero(1, "Laboratorio1", "John Doe", "12002-61-8"),
    droguero(2, "Introducción a la Química", "Chelsea Otakan", "27039-77-6", "http://www.material-ui.com/images/nature-600-337.jpg"),
    droguero(3, "Grupo de José", "Chelsea Otakan", "7785-23-1"),
    droguero(4, "Laboratorio LIDI", "Matías Pierobon", "7783-89-3")
];

const makeImage = image => image ? <CardMedia expandable={true}><img src={image} alt="" /></CardMedia> : null

const cardEntry = (droguero) => (
    <Card style={{ margin:'8px', maxWidth:'400px' }}>
    <CardHeader
      title={ droguero.responsable }
      subtitle="Responsable"
      avatar={<Avatar icon={<AccountIcon  />} />}
      actAsExpander={Boolean(droguero.imagen)}
      showExpandableButton={Boolean(droguero.imagen)}
    />
    { makeImage(droguero.imagen) }
    <CardTitle title={"Droguero " + droguero.numero} subtitle={droguero.unidadEjecutora}/>
    <CardActions>
      <FlatButton label="Ver" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

const constructList = () => drogueros.map(droguero => cardEntry(droguero));

const Lista = () => (
            <Row style={{ marginRight: '24px', minWidth: '445px', flex:'2 0'}}>
                { constructList() }
            </Row>
);

const AddButton = () => (
    <NewDialog title="Agregar droguero">
        <NewForm />
    </NewDialog>
);

const droguerosList = () => [<Lista key="table" />, <AddButton key="new" />];

export default droguerosList;

import React from 'react';
import { Link } from 'react-router';
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
const user = (name, status, image) => ({name, status, image});

let drogueros = [
    droguero(1, "Laboratorio1", user("John Doe", "Responsable"), "1202-6"),
    droguero(2, "Introducción a la Química", user("Chelsea Otakan", "Responsable", "http://www.material-ui.com/images/jsa-128.jpg"), "2739-7", "http://www.material-ui.com/images/nature-600-337.jpg"),
    droguero(3, "Grupo de José", user("Chelsea Otakan", "Responsable"), "7785-2"),
    droguero(4, "Laboratorio LIDI", user("Matías Pierobon", "Administrador"), "7783-8")
];

const makeImage = image => image ? <CardMedia expandable={true}><img src={image} alt="" /></CardMedia> : null;
const makeAvatar = image => image || <Avatar icon={<AccountIcon  />} />;

const cardEntry = (droguero) => (
    <Card key={droguero.id} style={{ margin:'8px', maxWidth:'400px' }}>
    <CardHeader
      title={ droguero.responsable.name }
      subtitle={ droguero.responsable.status }
      avatar={ makeAvatar(droguero.responsable.image) }
      actAsExpander={Boolean(droguero.imagen)}
      showExpandableButton={Boolean(droguero.imagen)}
    />
    { makeImage(droguero.imagen) }
    <CardTitle title={"Droguero " + droguero.numero} subtitle={droguero.unidadEjecutora}/>
    <CardActions>
      <Link to={"/drogueros/" + droguero.id}><FlatButton label="Ver" /></Link>
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

const DroguerosList = ({ params }) => (
    <drogueros style={{ width: '100%' }}>
        { droguerosList() }
    </drogueros>
);

export default DroguerosList;

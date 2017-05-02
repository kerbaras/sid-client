import React from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { SustanciasTable } from '../Sustancias';
import { Row } from '../Utilis';

const entry = (division) => (
    <Card key={division.id} style={{ margin:'8px', maxWidth:'400px', display:'flex', flex:'1 0 auto' }}>
    <CardTitle title={division.detalle} subtitle={"(" + division.shortName + ")"} />
    <CardActions>
      <FlatButton label="Ver" />
    </CardActions>
  </Card>
); 

const makeDivisiones = (divisiones) => divisiones.map(division => entry(division));

const Divisiones = ({ droguero }) => (
    <Row>
        { makeDivisiones(droguero.divisiones) }
    </Row>
);

const Sustancias = ({ droguero }) => (
    <sustancias>
        <h1>Sustancias</h1>
        <SustanciasTable sustancias={ droguero.sustancias } tools={() => null} />
    </sustancias>
);

const drogueroPage = (droguero) => [<Divisiones key="divisiones" droguero={droguero} />, <Sustancias key="sustancias"  droguero={droguero} />];

const Droguero = ({ params }) => (
    <droguero>
        { drogueroPage() }
    </droguero>
);

export default Droguero;
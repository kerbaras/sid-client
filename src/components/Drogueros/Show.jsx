import React from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { SustanciasTable } from '../Sustancias';
import { Row } from '../Utilis';


const sustancia = (id, formula, name, cas, sedronar, renar) => ({id, formula, name, cas, sedronar, renar});
let sustancias = [
    sustancia(1, "Ac_2O_3", "actinium(III) oxide", "12002-61-8", true, false),
    sustancia(2, "AgAlCl_4", "silver tetrachloroaluminate", "27039-77-6", false, false),
    sustancia(3, "AgBr", "silver bromide", "7785-23-1", true, true),
    sustancia(4, "AgBrO_3", "silver bromate", "7783-89-3", false, true),
    sustancia(5, "AgCN", "silver cyanide", "506-64-9", true, true),
    sustancia(6, "AgC_2H_3O_2", "silver acetate", "563-63-3", true, false),
    sustancia(7, "AgCl", "silver chloride", "7783-90-6", false, false),
    sustancia(8, "AgClO_3", "silver chlorate", "7783-92-8", false, true),
    sustancia(9, "AgClO_4", "silver perchlorate", "7783-93-9", true, false),
    sustancia(10,"AgF", "silver fluoride", "7775-41-9" , true, true),
    sustancia(11,"AgF_2", "silver difluoride", "7783-95-1" , false, true),
    sustancia(12,"AgI",	"silver iodide", "7783-96-2" , false, false)
];

const droguero = (id) => ({
        id,
        unidadEjecutora: {
            tipo: 'Laboratorio',
            detalle: 'Laboratorio LIDI',
        },
        responsable: {
            nombre: 'Matías Pierobón',
            rol: 'Administrador',
            imagen: ''
        },
        numero: '7783-89-3',
        imagen: 'http://www.material-ui.com/images/nature-600-337.jpg',
        divisiones: [
            {
                id: 1,
                detalle: 'Cajon 1',
                shortName: 'C1'
            },
            {
                id: 2,
                detalle: 'Cajon 2',
                shortName: 'C2'
            },
            {
                id: 3,
                detalle: 'Estante A',
                shortName: 'EA'
            },
            {
                id: 4,
                detalle: 'Estante B',
                shortName: 'EB'
            }
        ],
        sustancias
});

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
        { drogueroPage(droguero(1)) }
    </droguero>
);

export default Droguero;
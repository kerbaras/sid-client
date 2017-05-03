import React from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { SustanciasTable } from '../Sustancias';
import { Row } from '../Utilis';
import { getResource } from '../../libs/api'

const entry = (division) => (
    <Card key={division.id} style={{ margin:'8px', maxWidth:'400px', display:'flex', flex:'1 0 auto' }}>
    <CardTitle title={division.detalle} subtitle={"(" + division.nombre + ")"} />
    <CardActions>
      <FlatButton label="Ver" />
    </CardActions>
  </Card>
); 

const makeDivisiones = (divisiones) => divisiones.map(division => entry(division));

const Divisiones = ({ droguero }) => (
    <Row>
        { makeDivisiones(droguero.subdivisiones) }
    </Row>
);

const Sustancias = ({ droguero }) => (
    <sustancias>
        <h2>Sustancias</h2>
        <SustanciasTable sustancias={ droguero.drogas } tools={() => null} />
    </sustancias>
);


class Droguero extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            droguero: null
        }
    }
    
    componentDidMount(){
        this.getDroguero(this.props.match.params.drogueroId)
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getDroguero(nextProps.match.params.drogueroId)
    }

    getDroguero = (id) =>
        getResource(`drogueros/${id}`)
            .then(response => this.setState({ droguero: response.data.data }))
            .catch( response => {
                this.setState({ droguero: null, error: true })
            })

    render = () => {
        if(this.state.droguero != null) { return (
        <droguero>
            <h1>{ this.state.droguero.nombre }</h1>

            <Divisiones key="divisiones" droguero={this.state.droguero} />
            <Sustancias key="sustancias"  droguero={this.state.droguero} />
        </droguero>
    )} else if (this.state.error === true){
        return (<h1>No tiene permisos para ver este droguero</h1>)
    } else { 
        return null
    }}
}

export default Droguero;
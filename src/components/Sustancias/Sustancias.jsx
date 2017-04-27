import React from 'react';
import MainPage from '../MainPage';
import SustanciasList from './List';
import {postResource, getResource} from '../../libs/api'

const cleanSustancia = {
                formula:"",
                nombre:"",
                cas:"",
                densidad: "",
                tipoMedida:""
}

class Sustancias extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sustancias: [],
            formula:"",
            nombre:"",
            cas:"",
            densidad: "",
            tipoMedida:""
        }

    }

    submitSustancia = () =>{
        let {formula, nombre, cas, densidad, tipoMedida} = this.state
        let newSustancia = {formula, nombre, densidad, tipoMedida}
        postResource('sustancias/', newSustancia).then(()=>this.getSustancias())
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    componentDidMount(){
        this.getSustancias()
    }

    getSustancias = () => getResource('sustancias/').then(response => this.setState({ sustancias: response.data.data}))

    render = () => (
    <MainPage title="Sustancias">
        <SustanciasList
            sustancias={this.state.sustancias}
            data={this.state}
            handleSubmit={this.submitSustancia}
            handleChange={this.handleChange} />
    </MainPage>
    );
}

export default Sustancias;

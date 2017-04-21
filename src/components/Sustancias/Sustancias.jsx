import React from 'react';
import MainPage from '../MainPage';
import list from './List';
import db from '../../libs/db.js'

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
            sustancias: {},
            newSustancia:{
                formula:"",
                nombre:"",
                cas:"",
                densidad: "",
                tipoMedida:""
            }
        }

    }

    submitSustancia = () =>{
        db.child('sustancias').push(this.state.newSustancia, () => this.setState({ newSustancia: cleanSustancia }))
    }

    handleChange = property => event => {
        let nextState = { ...this.state.newSustancia };
        nextState[property] = event.target.value;
        this.setState({newSustancia: nextState});
    }

    componentDidMount(){
        db.child('sustancias').on('value', snap => this.setState({ sustancias: snap.val() }))
    }

    render = () => (
    <MainPage title="Sustancias">
        { list(this.state.sustancias, this.state.newSustancia, this.submitSustancia, this.handleChange) }
    </MainPage>
    );
}

export default Sustancias;

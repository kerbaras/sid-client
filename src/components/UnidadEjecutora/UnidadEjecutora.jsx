import React from 'react';
import MainPage from '../MainPage';
import List from './List';
import {getResource, postResource} from '../../libs/api.js'
import db from '../../libs/db.js'

class Unidades extends React.Component{

    constructor(props){
        super(props)
        this.state={ 
            unidades: [],
            nombre: '',
            detalle: '',
            tipo: ""
        }

    }

    componentDidMount(){
        db.child('unidades').on('value', snap => this.setState({ unidades: snap.val() }))
        console.log(this.state.unidades)
    }

    componentWillReceiveProps(nextProps, nextContext){
        //db.child('unidades').on('value', snap => this.setState({ unidades: snap.val() }))
        console.log(this.state.unidades)
    }


    updateUnidades = () =>{
        let unidad = {
            nombre: this.state.nombre,
            detalle: this.state.detalle,
            tipo: this.state.tipo
        }

        db.child('unidades').push(unidad)
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }
    
    render = () => (
        <MainPage title="Unidades Ejecutoras">
            { List(this.state.unidades, this.updateUnidades, this.handleChange, this.state) }
        </MainPage>
    );
}

export default Unidades;

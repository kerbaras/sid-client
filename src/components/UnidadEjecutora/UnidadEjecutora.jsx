import React from 'react';
import { Route } from 'react-router-dom'
import MainPage from '../MainPage'
import TiposUnidades from '../TiposUnidades';
import List from './List';
import {getResource, postResource} from '../../libs/api.js'

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
        this.getUnidades()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUnidades()
    }

    getUnidades = () => 
        getResource('unidades/').then(response => this.setState({ unidades: response.data.data }))


    updateUnidades = () =>{
        let unidad = {
            nombre: this.state.nombre,
            detalle: this.state.detalle,
            tipo: this.state.tipo
        }
       
       postResource('unidades/', { ...unidad }).then(()=>this.getUnidades())
    }

    handleChange = (property, isSelect = null) => {
        if(isSelect){
            return (event, index, value) => {
                let nextState = { ...this.state };
                nextState[property] = value;
                this.setState(nextState)
            }
        }
        return event => {
            let nextState = { ...this.state };
            nextState[property] = event.target.value;
            this.setState(nextState);
        }
    }
    
    render = () => (
        <MainPage title="Unidades Ejecutoras">
            <Route exact path={`/unidades/tipos`} component={TiposUnidades}/>
            <Route exact path='/unidades' render={() => <unidades> { List(this.state.unidades, this.updateUnidades, this.handleChange, this.state) } </unidades>}/>
        </MainPage>
    );
}

export default Unidades;

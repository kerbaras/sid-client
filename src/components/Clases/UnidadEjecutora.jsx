import React from 'react';
import { Route, Switch} from 'react-router-dom'
import MainPage from '../MainPage'
import TiposUnidades from '../TiposUnidades';
import List from './List';
import {getResource, postResource} from '../../libs/api.js'
import Show from './Show'

class Unidades extends React.Component{

    constructor(props){
        super(props)
        this.state={ 
            unidades: [],
            nombre: '',
            detalle: '',
        }

    }

    componentDidMount(){
        this.getUnidades()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUnidades()
    }

    getUnidades = () => 
        getResource('sustancias/clases/').then(response => this.setState({ unidades: response.data.data }))


    updateUnidades = () =>{
        let unidad = {
            nombre: this.state.nombre,
            detalle: this.state.detalle,
        }
       
       postResource('sustancias/clases/', { ...unidad }).then(()=>this.getUnidades())
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
        <MainPage title="Clases de Sustancias">
            <Switch>
                <Route path='/clases/:idunidad' component={Show}/>
                <Route path='/clases' render={() => <clases> { List(this.state.unidades, this.updateUnidades, this.handleChange, this.state) } </clases>}/>
            </Switch>
        </MainPage>
    );
}

export default Unidades;

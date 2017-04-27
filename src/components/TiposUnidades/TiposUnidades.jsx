import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MainPage from '../MainPage';
import List from './List';
import { getResource, postResource } from '../../libs/api.js'

class Unidades extends React.Component{

    constructor(props){
        super(props)
        this.state={ 
            tipos: [],
            nombre: '',
            detalle: '',
            open: false
        }

    }

    componentDidMount(){
        this.getTipos()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getTipos()
    }

    getTipos = () => 
        getResource('unidades/tipos/').then(response => this.setState({ tipos: response.data.data }))


    updateTipos = () =>{
        let tipo = {
            nombre: this.state.nombre,
            detalle: this.state.detalle,
        }

       postResource('unidades/tipos/', { ...tipo }).then(()=>this.getTipos()).catch(()=> this.setState({ open: false }))
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    handleRequestClose = () => { this.setState({ open: false }) }
    
    render = () => (
        <section>
            { List(this.state.tipos, this.updateTipos, this.handleChange, this.state) }
            <Snackbar
                open={this.state.open}
                message="Error al agregar el tipo"
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
            />
        </section>
    )
}

export default Unidades;

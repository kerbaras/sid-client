import React from 'react';
import MainPage from '../MainPage';
import UserList from './UserList';
import {getResource, postResource} from '../../libs/api.js'

class Users extends React.Component{

    constructor(props){
        super(props)
        this.state={ 
            users: [],
            nombre: '',
            apellido: '',
            username: '',
            email: '',
            isAdmin: false,
            password: '',
            repeatedPasswod: '',
            unidad: 1
        }

    }

    componentDidMount(){
        this.getUsers()
    }

    componentWillReceiveProps(nextProps, nextContext){
        this.getUsers()
    }

    getUsers = () => 
        getResource('usuarios/').then(response => this.setState({ users: response.data.data }))


    updateUsers = () =>{
        if(this.state.repeatedPasswod !== this.state.password || this.state.password.replace(/\s/gi, '').length== 0){
            return
        }
        
        let user = {
            name: this.state.nombre,
            lastname: this.state.apellido,
            role: this.state.role,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username.replace(/[\s.]/gi, ''),
            unidad: this.state.unidad
        }

        postResource('usuarios/', { ...user }).then(this.getUsers())
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
        <MainPage title="Usuarios">
            { UserList(this.state.users, this.updateUsers, this.handleChange, this.state) }
        </MainPage>
    );
}

export default Users;

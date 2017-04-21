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
            role: 'user',
            password: ''
        }

        this.updateUsers();
    }

    componentWillReceiveProps(){
        this.updateUsers()
    }

    updateUsers(){
        getResource('usuarios/').then(response => this.setState({ users: response.data.data }))
    }

    createUser(user){
        postResource('usuarios/', {

        }).then(response =>{
            if(response.status == 201){
                this.updateUsers()
            }
        })
    }

    handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }
    
    render = () => (
        <MainPage title="Usuarios">
            { UserList(this.state.users, this.updateUsers, this.handleChange, this.state) }
        </MainPage>
    );
}

export default Users;

import React from 'react';
import MainPage from '../MainPage';
import UserList from './UserList';
import {getResource, postResource} from '../../libs/api.js'
import db from '../../libs/db.js'

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
            password: ''
        }

    }

    componentDidMount(){
        this.getUsers()
    }

    componentWillReceiveProps(nextProps, nextContext){
        //db.child('users').on('value', snap => this.setState({ users: snap.val() }))
        this.getUsers()
    }

    getUsers = () => 
        getResource('usuarios').then(response => this.setState({ users: response.data.data }))


    updateUsers = () =>{
        let user = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            role: this.state.role,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
        }

        postResource('usuarios', { ...user }).then(this.getUsers())
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

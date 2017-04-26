import React from 'react'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { postResource } from '../../libs/api'
import { updateToken } from '../../libs/user'
import './login.css'

const Error = ({ text }) => (
    <section>
        { text }
    </section>
)

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={ username: '', password: '', invalid: false }
    }

   handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    doLogin = () => {
        postResource('login_check',
            `_username=${this.state.username}&_password=${this.state.password}`, 
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
            )
            .then( response => {
                this.setState({ invalid: false })
                updateToken(response.data.token)
            })
            .catch( response => this.setState({ invalid: true }))
    } 

    showError = () => this.state.invalid ? (<Error text="Nombre o contraseña erróneos!" />) : null

    render = () => (
        <login>
            <Paper zDepth={2}>
                <header>LogIn!</header>
                { this.showError() }
                <section>
                    <div>
                        <TextField floatingLabelText="Nombre de Usuario" fullWidth={true} value={this.state.username} onChange={this.handleChange('username')} />
                    </div>
                    <div>
                        <TextField floatingLabelText="Contraseña" type="password" fullWidth={true} value={this.state.password} onChange={this.handleChange('password')} />
                    </div>
                </section>
                <footer><RaisedButton label="Primary" primary={true} onTouchTap={this.doLogin} /></footer>
            </Paper>
        </login>
    )
}

export default Login
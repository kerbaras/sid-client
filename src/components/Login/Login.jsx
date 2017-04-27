import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { getUser } from '../../redux/getters'
import { userActions } from '../../redux/actions'

import './login.css'

const Error = ({ text }) => (
    <section>
        { text }
    </section>
)

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={ username: '', password: '', first: true }
    }

   handleChange = property => event => {
        let nextState = { ...this.state };
        nextState[property] = event.target.value;
        this.setState(nextState);
    }

    doLogin = () => this.props.doLogin(this.state.username, this.state.password)

    showError = () => (this.props.user && !this.state.first) ? (<Error text="Nombre o contraseña erróneos!" />) : null

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

export default connect(getUser, userActions)(Login)
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { HashRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import App from '../App'
import Login from '../Login'
import defaultTheme from '../../themes/default'
import { getUser } from '../../redux/getters'

const muiTheme = getMuiTheme(defaultTheme)

let createRouter = (user) =>  user ? <App isAdmin={user.roles.indexOf('ROLE_ADMIN') > -1 }/> : <Login/>

const MyRouter = ({ user }) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
            { createRouter(user) }
        </Router>
    </MuiThemeProvider>
)

export default connect(getUser)(MyRouter);
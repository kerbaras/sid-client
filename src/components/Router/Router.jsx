import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from '../App'
import Sustancias from '../Sustancias'
import Users from '../Users'
import UnidadEjecutora from '../UnidadEjecutora'
import Drogueros, { DroguerosList, Droguero } from '../Drogueros'
import NotFound from '../NotFound'
import {getUser} from '../../libs/user'
import Login from '../Login'
import defaultTheme from '../../themes/default'

const muiTheme = getMuiTheme(defaultTheme)

let createRouter = () => {
    let user = getUser()
    if(user == null){
        return (
                <Route path="*" component={Login}/>
        )
    }else{
        return (
            <Route path="/" component={App}>
                <IndexRoute component={NotFound} />
                <Route path="sustancias" component={Sustancias}/>
                <Route path="usuarios" component={Users} />
                <Route path="unidades" component={UnidadEjecutora} />
                <Route path="drogueros" component={Drogueros} >
                    <IndexRoute components={DroguerosList} />
                    <Route path=":drogueroId" component={Droguero} />
                </Route>
                <Route path="*" component={NotFound} />
            </Route>
        )
    }
}

const MyRouter = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            { createRouter() }
        </Router>
    </MuiThemeProvider>
)

export default MyRouter;
import React from 'react'
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import SideMenu from './SideMenu'
import NotFound from './NotFound'
import Users from './Users'
import Sustancias from './Sustancias'
import UnidadEjecutora from './UnidadEjecutora'
import Drogueros from './Drogueros'
import Clases from './Clases'
import Entidades from './EntidadesReguladoras'
import Motivos from './MotivosMovimiento'
import './App.css'


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {expand: true}
    }

    handleExpand = () => this.setState({expand : !this.state.expand});

    render = () => (
        <app className={[this.state.expand ? "expand" : null]}>
            <AppBar
                onLeftIconButtonTouchTap={this.handleExpand}
                title="Titulo"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={{ position: 'fixed' }}
            />
            <SideMenu />
            <div className="page-content">
                <Route exact path="/" component={NotFound}/>
                <Route path="/sustancias" component={Sustancias}/>
                <Route path="/usuarios" component={Users}/>
                <Route path="/unidades" component={UnidadEjecutora}/>
                <Route path="/drogueros" component={Drogueros}/>
                <Route path="/clases" component={Clases}/>
                <Route path="/entidades" component={Entidades}/>
                <Route path="/motivos" component={Motivos}/>
            </div>
        </app>
    );
}

export default App;
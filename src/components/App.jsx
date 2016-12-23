import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import SideMenu from './SideMenu';
import Users from './Users'
import defaultTheme from '../themes/default';
import './App.css';

const muiTheme = getMuiTheme(defaultTheme);

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {expand: true}
    }

    handleExpand = () => this.setState({expand : !this.state.expand});

    render = () => (
        <MuiThemeProvider muiTheme={muiTheme}>
            <app className={[this.state.expand ? "expand" : null]}>
                <AppBar
                    onLeftIconButtonTouchTap={this.handleExpand}
                    title="Dmitri"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={{ position: 'fixed' }}
                />
                
                <SideMenu />
    
                <div className="page-content">
                    <Users /> 
                </div>
            </app>
        </MuiThemeProvider>
    );
}

export default App;
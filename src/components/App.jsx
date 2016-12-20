import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import SideMenu from './SideMenu';
import defaultTheme from '../themes/default';
import './App.css';

const muiTheme = getMuiTheme(defaultTheme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <sid-app>
            <AppBar
                title="Dmitri"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={{ position: 'fixed' }}
            />
            
            <SideMenu />

            <div className="page-content">
                <Users />
            </div>
        </sid-app>
    </MuiThemeProvider>
);

export default App;
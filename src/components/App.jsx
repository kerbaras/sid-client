import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import defaultTheme from '../themes/default';

const muiTheme = getMuiTheme(defaultTheme);

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <sid-app>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </sid-app>
    </MuiThemeProvider>
);

export default App;
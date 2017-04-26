import React from 'react';
import AppBar from 'material-ui/AppBar';
import SideMenu from './SideMenu';
import './App.css';


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
                {this.props.children} 
            </div>
        </app>
    );
}

export default App;
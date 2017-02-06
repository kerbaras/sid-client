import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import './MainPage.css';

const Header = ({ title }) => (
    <header>
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text={title} />
            </ToolbarGroup>
        </Toolbar>
    </header>
);

const makeHeader = (title) => ( title ? <Header title={title} /> : null)

const MainPage = ({ title, children }) => (
    <page>
        { makeHeader(title) }
        <content>
            { children }
        </content>
    </page>
);

export default MainPage;

import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import EventIcon from 'material-ui/svg-icons/action/event';
import UsersIcon from 'material-ui/svg-icons/social/group';
import PhotoIcon from 'material-ui/svg-icons/image/photo-library';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import UserCard from './User';
import './SideMenu.css';
const SideMenu = () => (
    <side-menu>
        <Paper zDepth={1}>
            <UserCard />
            <List>
                <Link to="/"><ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} /></Link>
                <Link to="/usuarios"><ListItem primaryText="Usuarios" leftIcon={<UsersIcon />} /></Link>
                <Link to="/sustancias"><ListItem primaryText="Sustancias" leftIcon={<WarningIcon />} /></Link>
                <Link to="/drogueros"><ListItem primaryText="Drogueros" leftIcon={<ContentInbox />} /></Link>
                <Link to="/"><ListItem primaryText="Proveedores" leftIcon={<ShoppingCart />} /></Link>
                <Link to="/"><ListItem primaryText="Unidades Ejecutoras" leftIcon={<ActionGrade />} /></Link>
                <Link to="/"><ListItem primaryText="Eventos" leftIcon={<EventIcon />} /></Link>
                <Link to="/"><ListItem primaryText="Imagenes GHS" leftIcon={<PhotoIcon />} /></Link>
            </List>
        </Paper>
    </side-menu>
);

export default SideMenu;
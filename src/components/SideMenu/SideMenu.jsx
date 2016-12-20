import React from 'react';
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
import './SideMenu.css';
const SideMenu = () => (
    <side-menu>
        <Paper zDepth={1}>
            <user style={{ backgroundImage: 'url("https://newevolutiondesigns.com/images/freebies/google-material-design-wallpaper-10.jpg")' }} />
            <List>
                <ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} />
                <ListItem primaryText="Usuarios" leftIcon={<UsersIcon />} />
                <ListItem primaryText="Sustancias" leftIcon={<WarningIcon />} />
                <ListItem primaryText="Drogueros" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Proveedores" leftIcon={<ShoppingCart />} />
                <ListItem primaryText="Unidades Ejecutoras" leftIcon={<ActionGrade />} />
                <ListItem primaryText="Eventos" leftIcon={<EventIcon />} />
                <ListItem primaryText="Imagenes GHS" leftIcon={<PhotoIcon />} />
            </List>
        </Paper>
    </side-menu>
);

export default SideMenu;
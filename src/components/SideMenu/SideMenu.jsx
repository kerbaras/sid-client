import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import UsersIcon from 'material-ui/svg-icons/social/group'
import WarningIcon from 'material-ui/svg-icons/alert/warning'
import UserCard from './User'
import { getUser } from '../../redux/getters'
import './SideMenu.css';

const AdminMenu = () => (
    <List>
        <Link to="/"><ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} /></Link>
        <Link to="/usuarios"><ListItem primaryText="Usuarios" leftIcon={<UsersIcon />} /></Link>
        <Link to="/sustancias"><ListItem primaryText="Sustancias" leftIcon={<WarningIcon />} /></Link>
        <Link to="/drogueros"><ListItem primaryText="Drogueros" leftIcon={<ContentInbox />} /></Link>
        <Link to="/unidades"><ListItem primaryText="Unidades Ejecutoras" leftIcon={<ActionGrade />} /></Link>
    </List>
)
const UserMenu = () => (
    <List>
        <Link to="/"><ListItem primaryText="Dashboard" leftIcon={<DashboardIcon />} /></Link>
        <Link to="/drogueros"><ListItem primaryText="Mis Drogueros" leftIcon={<ContentInbox />} /></Link>
        <Link to="/usuarios"><ListItem primaryText="Mis Usuarios" leftIcon={<UsersIcon />} /></Link>
        <Link to="/sustancias"><ListItem primaryText="Mis Sustancias" leftIcon={<WarningIcon />} /></Link>
    </List>
)

const CreateMenu = ({ user }) => user.roles.indexOf('ROLE_ADMIN') > -1 ? <AdminMenu/> : <UserMenu/>

const SideMenu = ({ user }) => (
    <side-menu>
        <Paper zDepth={1}>
            <UserCard user={user} />
            <CreateMenu user={user} />
        </Paper>
    </side-menu>
);

export default connect(getUser)(SideMenu);
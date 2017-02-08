import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/social/person';
import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowUpIcon from 'material-ui/svg-icons/navigation/arrow-drop-up';
import { Row } from '../Utilis';

const UserCard = () => (
    <user-card style={{ backgroundImage: 'url("https://newevolutiondesigns.com/images/freebies/google-material-design-wallpaper-10.jpg")' }} >
        <Avatar icon={<AccountIcon  />} />
        <Row>
            <user-info>
                <user-name>Matías Pierobón</user-name>
                <user-role>Administrador</user-role>
            </user-info>
            <IconButton tooltip="SVG Icon">
                <ArrowDownIcon />
            </IconButton>
        </Row>
    </user-card>
);

export default UserCard;
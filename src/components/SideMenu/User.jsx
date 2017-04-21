import React from 'react';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';

const UserCard = () => (
    <user-card style={{ backgroundImage: 'url("https://newevolutiondesigns.com/images/freebies/google-material-design-wallpaper-10.jpg")' }} >
        <Avatar className="photo" src="//lh3.googleusercontent.com/-_mHhaRP_Vrg/AAAAAAAAAAI/AAAAAAAAAAA/ADPlhfL_83s2YQsavoh2O1FjYaNN7t5ioQ/s96-c-mo/photo.jpg" size={64}/>
        <user-row>
            <user-info>
                <user-name>Matías Pierobón</user-name>
                <user-role>Administrador</user-role>
            </user-info>
            <IconButton tooltip="SVG Icon">
                <ArrowDownIcon color="#eee" />
            </IconButton>
        </user-row>
    </user-card>
);

export default UserCard;
import React from 'react';
import { Card, CardTitle,  CardText } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const Users = () => (
    <users>
        <Card>
            <CardText>
                <List>
                    <ListItem primaryText="Todos los Contactos"/>
                    <ListItem primaryText="Administradores"/>
                    <ListItem primaryText="Encargados"/>
                    <ListItem primaryText="Otros"/>
                </List>
            </CardText>
        </Card>
        <Card>
            <CardText>
                <List>
                    <ListItem
                        primaryText="Chelsea Otakan"
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />}
                    />
                    <ListItem
                        primaryText="Eric Hoffman"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/kolage-128.jpg" />}
                    />
                    <ListItem
                        primaryText="James Anderson"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/jsa-128.jpg" />}
                    />
                    <ListItem
                        primaryText="Kerem Suer"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/kerem-128.jpg" />}
                    />
                </List>
                <Divider inset={true} />
                <List>
                    <ListItem
                        primaryText="Adelle Charles"
                        leftAvatar={
                        <Avatar
                            style={{left: 8}}
                        >
                            A
                        </Avatar>
                        }
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/adellecharles-128.jpg" />}
                    />
                    <ListItem
                        primaryText="Adham Dannaway"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/adhamdannaway-128.jpg" />}
                    />
                    <ListItem
                        primaryText="Allison Grayce"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/allisongrayce-128.jpg" />}
                    />
                    <ListItem
                        primaryText="Angel Ceballos"
                        insetChildren={true}
                        rightAvatar={<Avatar src="http://www.material-ui.com/images/angelceballos-128.jpg" />}
                    />
                </List>
            </CardText>
        </Card>
    </users>
);

export default Users;

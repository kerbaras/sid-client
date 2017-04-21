import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconEdit from 'material-ui/svg-icons/content/create';
import IconDelete from 'material-ui/svg-icons/action/delete';
import RadioCheck from 'material-ui/svg-icons/toggle/radio-button-checked';
import { NewDialog } from '../Dialogs';
import NewForm from './NewForm';
import SustanciasTable from './Table';

const MoreMenu = ({ sustancia }) => (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      desktop={true}
    >
      <MenuItem primaryText="Eliminar" leftIcon={<IconDelete />} />
    </IconMenu>
);

const tools = ( sustancia ) => [
    <RadioCheck color="(sustancia.sedronar) ? blue : grey" />,
    <RadioCheck color="(sustancia.renar) ? green : grey" />,
    <IconButton key="edit"><IconEdit /></IconButton> ,
    <MoreMenu key="more" sustancia={sustancia} />
];

const AddButton = ({data, handleSubmit, handleChange}) => (
    <NewDialog handleSubmit={handleSubmit} title="Agregar Sustancia">
        <NewForm data={data} handleChange={handleChange} />
    </NewDialog>
);

const SustanciasList = ({sustancias, data, handleSubmit, handleChange}) => (
    <sustancias-list>
        <SustanciasTable sustancias={sustancias} tools={tools} key="table" />
        <AddButton key="new" data={data} handleSubmit={handleSubmit} handleChange={handleChange} />
    </sustancias-list>
)

export default SustanciasList;

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

const sustancia = (id, formula, name, cas, sedronar, renar) => ({id, formula, name, cas, sedronar, renar});
let sustancias = [
    sustancia(1, "Ac_2O_3", "actinium(III) oxide", "12002-61-8", true, false),
    sustancia(2, "AgAlCl_4", "silver tetrachloroaluminate", "27039-77-6", false, false),
    sustancia(3, "AgBr", "silver bromide", "7785-23-1", true, true),
    sustancia(4, "AgBrO_3", "silver bromate", "7783-89-3", false, true),
    sustancia(5, "AgCN", "silver cyanide", "506-64-9", true, true),
    sustancia(6, "AgC_2H_3O_2", "silver acetate", "563-63-3", true, false),
    sustancia(7, "AgCl", "silver chloride", "7783-90-6", false, false),
    sustancia(8, "AgClO_3", "silver chlorate", "7783-92-8", false, true),
    sustancia(9, "AgClO_4", "silver perchlorate", "7783-93-9", true, false),
    sustancia(10,"AgF", "silver fluoride", "7775-41-9" , true, true),
    sustancia(11,"AgF_2", "silver difluoride", "7783-95-1" , false, true),
    sustancia(12,"AgI",	"silver iodide", "7783-96-2" , false, false)
];

const AddButton = () => (
    <NewDialog title="Agregar Sustancia">
        <NewForm />
    </NewDialog>
);

const SustanciasList = () => [<SustanciasTable sustancias={sustancias} tools={tools} key="table" />, <AddButton key="new" />];

export default SustanciasList;

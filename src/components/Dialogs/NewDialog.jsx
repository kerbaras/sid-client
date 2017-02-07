import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingDialog from './FloatingDialog';

const NewDialog = ({ children, title }) => (
  <FloatingDialog
    title={title}
    icon={<ContentAdd/>}
    secondary={true}
  >
    { children }
  </FloatingDialog>
);

export default NewDialog;
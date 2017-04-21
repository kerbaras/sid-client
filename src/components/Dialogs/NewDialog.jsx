import React from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingDialog from './FloatingDialog';

const NewDialog = ({ children, title, handleSubmit }) => (
  <FloatingDialog
    title={title}
    icon={<ContentAdd/>}
    secondary={true}
    handleSubmit={handleSubmit}
  >
    { children }
  </FloatingDialog>
);

export default NewDialog;
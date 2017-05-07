import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingDialog from './FloatingDialog';

const NewDialog = ({ children, title, handleSubmit }) => (
  <FloatingDialog
    title={title}
    btnContent={title}
    handleSubmit={handleSubmit}
    btnType={FlatButton}
  >
    { children }
  </FloatingDialog>
);

export default NewDialog;
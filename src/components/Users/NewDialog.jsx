import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { grey200 } from 'material-ui/styles/colors';
import NewForm from './NewForm';

const styles = {
    dialog: {
        title:{
            backgroundColor: grey200
        }
    }
};

const NewButton = ({onTouchTap}) => (
    <FloatingActionButton
        secondary={true}
        className="addButton"
        onTouchTap={onTouchTap}
    >
      <ContentAdd />
    </FloatingActionButton>
);

export default class NewDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
        <FlatButton
            label="Cancel"
            onTouchTap={()=>this.handleClose()}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onTouchTap={()=>this.handleClose()}
        />
    ];
    return (
      <div>
        <NewButton onTouchTap={this.handleOpen} />
        <Dialog
          title="Crear Usuario"
          titleStyle={styles.dialog.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <NewForm />
        </Dialog>
      </div>
    );
  }
}
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
    dialog: {
        title:{
            backgroundColor: grey200
        }
    }
};

const Button = ({icon, onTouchTap, secondary}) => (
    <FloatingActionButton
        secondary={secondary}
        className="addButton"
        onTouchTap={onTouchTap}
    >
      { icon }
    </FloatingActionButton>
);

export default class FloatingDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit(){
    this.handleClose()
    this.props.handleSubmit()
  }

  render() {
    const actions = [
        <FlatButton
            label="Cancelar"
            onTouchTap={()=>this.handleClose()}
        />,
        <FlatButton
            label="Aceptar"
            primary={true}
            keyboardFocused={true}
            onTouchTap={()=>this.handleSubmit()}
        />
    ];
    return (
      <div>
        <Button secondary={this.props.secondary} icon={ this.props.icon } onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.title}
          titleStyle={styles.dialog.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          { this.props.children }
        </Dialog>
      </div>
    );
  }
}
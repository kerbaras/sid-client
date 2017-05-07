import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
    dialog: {
        title:{
            backgroundColor: grey200
        }
    }
};

const Button = ({children, onTouchTap, secondary, BtnType, className}) => (
    <BtnType
        secondary={secondary}
        className={className}
        onTouchTap={onTouchTap}
    >
      { children }
    </BtnType>
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
        <Button secondary={this.props.secondary} onTouchTap={this.handleOpen} BtnType={this.props.btnType} className={this.props.btnClass}>
          { this.props.btnContent }
        </Button>
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
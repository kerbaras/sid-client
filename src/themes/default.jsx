import {
  red500, red800,
  blue500, blue700,
  pink500,
  grey300, grey400, grey900,
  white
} from 'material-ui/styles/colors';

const DefaultTheme = {
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: grey400,
        accent1Color: red500,
        accent2Color: red800,
        accent3Color: pink500,
        borderColor: grey300
    },
    appBar: {
        textColor: grey900,
        color: white
    },
    toolbar: {
        color: white,
        iconColor: white, 
        backgroundColor: blue500
    }
};

export default DefaultTheme;
import { PaletteOptions } from '@mui/material';
import { caribbeanGreen, orange, downy, watermelon } from './colors';

const palette: PaletteOptions = {
  primary: {
    main: orange[500],
  },
  secondary: {
    main: caribbeanGreen[500],
  },
  info: {
    main: downy[500],
  },
  error: {
    main: watermelon[500],
  },
  text: {
    primary: '#050F24',
    secondary: '#6F757E',
    disabled: '#CCCDCD',
  },
  action: {},
  background: {
    default: '#FFF4EA',
    paper: '#FFF',
  },
  divider: '#E1E1E1',
};

export default palette;

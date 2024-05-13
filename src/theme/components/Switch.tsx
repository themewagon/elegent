import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Switch: Components<Omit<Theme, 'components'>>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {},
};

export default Switch;

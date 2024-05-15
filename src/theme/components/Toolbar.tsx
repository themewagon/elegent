import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: {
    disableGutters: true,
  },
  styleOverrides: {
    root: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      // paddingLeft: 0,
      // paddingRight: 0,
    }),
  },
};

export default Toolbar;

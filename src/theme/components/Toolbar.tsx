import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(3.75),
    }),
  },
};

export default Toolbar;

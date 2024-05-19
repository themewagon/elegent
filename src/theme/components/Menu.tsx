import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Menu: Components<Omit<Theme, 'components'>>['MuiMenu'] = {
  defaultProps: {},
  styleOverrides: {
    paper: ({ theme }) => ({
      minWidth: theme.spacing(23.75),
      borderRadius: theme.shape.borderRadius * 2,
    }),
  },
};

export default Menu;

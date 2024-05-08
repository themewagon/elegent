import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButton: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      width: theme.spacing(5),
      height: theme.spacing(5),
      backgroundColor: theme.palette.action.focus,
    }),
    sizeSmall: ({ theme }) => ({}),
    sizeMedium: ({ theme }) => ({}),
  },
};

export default IconButton;

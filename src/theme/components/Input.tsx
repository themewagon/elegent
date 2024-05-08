import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Input: Components<Omit<Theme, 'components'>>['MuiInput'] = {
  defaultProps: {},
  styleOverrides: {
    input: ({ theme }) => ({
      '&::placeholder': {
        fontFamily: theme.typography.fontFamily?.split(',')[1],
      },
    }),
  },
};

export default Input;

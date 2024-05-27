import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
      '&.Mui-focused': {
        color: theme.palette.text.secondary,
      },
    }),
  },
};

export default InputLabel;

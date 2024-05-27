import { Theme, outlinedInputClasses } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const OutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius * 7.5,
      color: theme.palette.text.secondary,
      width: theme.spacing(41.25),
      height: theme.spacing(5.625),
      '&::before, &::after': {
        border: 0,
        borderBottom: 0,
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        border: 0,
      },
      '&.Mui-focused:after': {
        border: 0,
      },
      [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.palette.divider,
      },
      '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid black',
      },
    }),
    input: ({ theme }) => ({
      '&::placeholder': {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.body1.fontWeight,
        fontFamily: theme.typography.body1.fontFamily,
      },
    }),
  },
};

export default OutlinedInput;

import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
    defaultProps: {},
    styleOverrides: {
        root: ({ theme }) => ({
            width: pxToRem(20),
            height: pxToRem(20),
            color: theme.palette.text.secondary,
            margin: 0,
        }),
    },
};

export default InputAdornment;
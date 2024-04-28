import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputAdornment: Components<Omit<Theme, 'components'>>['MuiInputAdornment'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            // width: '25px',
            // height: '25px',
        },
    },
};

export default InputAdornment;
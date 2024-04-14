
import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
    defaultProps: {
        // shrink: false,
    },
    styleOverrides: {
        root: {
            color: '#6F757E',
            "&.Mui-focused": {
                color: '#6F757E',
            },
            ":hover": {

            },
            ":focus": {

            },
        },
    }
};

export default InputLabel;
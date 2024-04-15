import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
// import { theme } from 'theme/theme';

const InputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
    defaultProps: {
        // shrink: false,
    },
    styleOverrides: {
        root: {
            color: '#6F757E',
            fontSize: '16px',
            fontWeight: 400,
            "&.Mui-focused": {
                color: '#6F757E',
            },
            // ":hover": {

            // },
            // ":focus": {

            // },
        },
    }
};

export default InputLabel;
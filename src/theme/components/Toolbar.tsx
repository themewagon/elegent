import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Toolbar: Components<Omit<Theme, 'components'>>['MuiToolbar'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            // padding: '20px 0',
        }
    }
};

export default Toolbar;
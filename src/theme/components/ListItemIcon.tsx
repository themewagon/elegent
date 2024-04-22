import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            color: 'inherit',
        }
    }
};

export default ListItemIcon;
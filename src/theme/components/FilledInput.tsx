import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
    defaultProps: {},
    styleOverrides: {
        root: {
            // padding: 0,
            backgroundColor: 'transparent',
            ":before": {
                border: 0,
            },
            ":hover": {
                border: 0,
                backgroundColor: 'transparent',
            },
            ":hover &:before": {
                border: 0,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
                border: 0,
            },
            ":focus" : {
                border: 0
            },
            ":after" : {
                border: 0
            },
            "&.Mui-focused" : {
                backgroundColor: 'transparent',
                ":before": {
                    border: 0,
                },
                ":focus" : {
                    border: 0
                }
            }
        },
        
    }
};

export default FilledInput;
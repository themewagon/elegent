import { ReactElement, useState } from 'react';
import { FormControlLabel, FormGroup, Stack, Switch, Typography } from '@mui/material';

const Account = (): ReactElement => {
  const [state, setState] = useState({
    1: false,
    2: true,
    3: true,
  });

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Stack
      padding={(theme) => theme.spacing(2.5, 3.375, 2, 2.5)}
      bgcolor="background.paper"
      borderRadius={5}
      gap={2.625}
      height={1}
    >
      <Typography variant="subtitle1">Account</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state[1]} onChange={handleChange} name={'1'} />}
          label={
            <Typography variant="body1" color={state[1] ? 'text.primary' : 'text.secondary'}>
              Email me when someone follow me
            </Typography>
          }
        />
        <FormControlLabel
          control={<Switch checked={state[2]} onChange={handleChange} name={'2'} />}
          label={
            <Typography variant="body1" color={state[2] ? 'text.primary' : 'text.secondary'}>
              Email me when someone answer on my post
            </Typography>
          }
        />
        <FormControlLabel
          control={<Switch checked={state[3]} onChange={handleChange} name={'3'} />}
          label={
            <Typography variant="body1" color={state[3] ? 'text.primary' : 'text.secondary'}>
              Email me when someone mention me
            </Typography>
          }
        />
      </FormGroup>
    </Stack>
  );
};

export default Account;

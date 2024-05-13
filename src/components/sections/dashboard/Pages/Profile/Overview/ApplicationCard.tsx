import { FormControlLabel, FormGroup, Stack, Switch, Typography } from '@mui/material';
import { useState } from 'react';

const Application = (): React.ReactElement => {
  const [state, setState] = useState({
    1: true,
    2: false,
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
      bgcolor={(theme) => theme.palette.background.paper}
      borderRadius={(theme) => theme.shape.borderRadius * 1.25}
      gap={2.625}
      height={1}
    >
      <Typography variant="subtitle1">Application</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state[1]} onChange={handleChange} name={'1'} />}
          label={
            <Typography
              variant="body1"
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              color={(theme) =>
                state[1] ? theme.palette.text.primary : theme.palette.text.secondary
              }
            >
              New launches and project
            </Typography>
          }
        />
        <FormControlLabel
          control={<Switch checked={state[2]} onChange={handleChange} name={'2'} />}
          label={
            <Typography
              variant="body1"
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              color={(theme) =>
                state[2] ? theme.palette.text.primary : theme.palette.text.secondary
              }
            >
              Monthly product update
            </Typography>
          }
        />
        <FormControlLabel
          control={<Switch checked={state[3]} onChange={handleChange} name={'3'} />}
          label={
            <Typography
              variant="body1"
              fontFamily={(theme) => theme.typography.fontFamily?.split(',')[1]}
              color={(theme) =>
                state[3] ? theme.palette.text.primary : theme.palette.text.secondary
              }
            >
              Subscribe to newsletter
            </Typography>
          }
        />
      </FormGroup>
    </Stack>
  );
};

export default Application;

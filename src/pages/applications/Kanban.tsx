import { Button, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { ReactElement } from 'react';

const Kanban = (): ReactElement => {
  return (
    <Grid2 container sx={{ '& button': { m: 1 } }} columns={12}>
      <Grid2 xs={4}>
        <Stack>
          <h3>Primary</h3>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </div>
        </Stack>
      </Grid2>
      <Grid2 xs={4}>
        <Stack>
          <h3>Secondary</h3>
          <div>
            <Button size="small" color="secondary">
              Small
            </Button>
            <Button size="medium" color="secondary">
              Medium
            </Button>
            <Button size="large" color="secondary">
              Large
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="small" color="secondary">
              Small
            </Button>
            <Button variant="outlined" size="medium" color="secondary">
              Medium
            </Button>
            <Button variant="outlined" size="large" color="secondary">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small" color="secondary">
              Small
            </Button>
            <Button variant="contained" size="medium" color="secondary">
              Medium
            </Button>
            <Button variant="contained" size="large" color="secondary">
              Large
            </Button>
          </div>
        </Stack>
      </Grid2>
      <Grid2 xs={4}>
        <Stack>
          <h3>Info</h3>
          <div>
            <Button size="small" color="info">
              Small
            </Button>
            <Button size="medium" color="info">
              Medium
            </Button>
            <Button size="large" color="info">
              Large
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="small" color="info">
              Small
            </Button>
            <Button variant="outlined" size="medium" color="info">
              Medium
            </Button>
            <Button variant="outlined" size="large" color="info">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small" color="info">
              Small
            </Button>
            <Button variant="contained" size="medium" color="info">
              Medium
            </Button>
            <Button variant="contained" size="large" color="info">
              Large
            </Button>
          </div>
        </Stack>
      </Grid2>
      <Grid2 xs={4}>
        <Stack>
          <h3>Error</h3>
          <div>
            <Button size="small" color="error">
              Small
            </Button>
            <Button size="medium" color="error">
              Medium
            </Button>
            <Button size="large" color="error">
              Large
            </Button>
          </div>
          <div>
            <Button variant="outlined" size="small" color="error">
              Small
            </Button>
            <Button variant="outlined" size="medium" color="error">
              Medium
            </Button>
            <Button variant="outlined" size="large" color="error">
              Large
            </Button>
          </div>
          <div>
            <Button variant="contained" size="small" color="error">
              Small
            </Button>
            <Button variant="contained" size="medium" color="error">
              Medium
            </Button>
            <Button variant="contained" size="large" color="error">
              Large
            </Button>
          </div>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default Kanban;

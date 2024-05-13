import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const ProjectsOverview = () => {
  return (
    <Box
      sx={(theme) => ({
        p: theme.spacing(3.75),
        bgcolor: theme.palette.background.paper,
        height: 1,
        borderRadius: theme.shape.borderRadius * 1.25,
      })}
    >
      <Stack gap={2}>
        <Typography variant="h5" color={(theme) => theme.palette.text.primary}>
          Projects
        </Typography>
        <Typography variant="body1" color={(theme) => theme.palette.text.secondary}>
          Architects design houses
        </Typography>
      </Stack>
      <Grid container></Grid>
    </Box>
  );
};

export default ProjectsOverview;

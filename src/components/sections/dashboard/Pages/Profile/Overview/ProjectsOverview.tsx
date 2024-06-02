import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProjectCard from './ProjectCard';
import scandinavian from 'assets/projects-overview/Scandinavian.png';
import minimalist from 'assets/projects-overview/Minimalist.png';
import modern from 'assets/projects-overview/Modern.png';
import gothic from 'assets/projects-overview/Gothic.png';

const ProjectsOverview = () => {
  return (
    <Box
      sx={{
        p: 3.75,
        bgcolor: 'background.paper',
        height: 1,
        borderRadius: 5,
      }}
    >
      <Stack gap={2}>
        <Typography variant="h5" color="text.primary">
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Architects design houses
        </Typography>
      </Stack>
      <Grid container columns={12} spacing={3.75} mt={1.875}>
        <Grid xs={12} sm={6} md={3} width={1}>
          <ProjectCard
            title="Modern"
            subtitle="As Uber works through a huge 
amount of internal 
management turmoil."
            image={modern}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <ProjectCard
            title="Scandinavian"
            subtitle="Different people have different 
taste, and various types of 
music."
            image={scandinavian}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <ProjectCard
            title="Minimalist"
            subtitle="Music is something that 
everyone has their own specific 
opinion about."
            image={minimalist}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <ProjectCard
            title="Gothic"
            subtitle="Why would anyone pick blue 
over pink? Pink is obviously a 
better color."
            image={gothic}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsOverview;

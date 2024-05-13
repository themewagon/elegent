import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Account from 'components/sections/dashboard/Pages/Profile/Overview/AccountCard';
import Application from 'components/sections/dashboard/Pages/Profile/Overview/ApplicationCard';
import Conversations from 'components/sections/dashboard/Pages/Profile/Overview/ConversationsCard';
import ProjectsCards from 'components/sections/dashboard/Pages/Profile/Overview/ProjectsOverview';
import UserInfo from 'components/sections/dashboard/Pages/Profile/Overview/UserCard';
import { drawerWidth } from 'layouts/main-layout';

const Overview = (): React.ReactElement => {
  return (
    <Grid
      container
      component="main"
      columns={12}
      spacing={3.75}
      flexGrow={1}
      m={0}
      mt="85.125px"
      pt={4.375}
      pr={1.875}
      pb={1.875}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        pl: { xs: 3.75, md: 0 },
      }}
    >
      <Grid xs={12}>
        <UserInfo />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Account />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Application />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Conversations />
      </Grid>
      <Grid xs={12}>
        <ProjectsCards />
      </Grid>
    </Grid>
  );
};

export default Overview;
